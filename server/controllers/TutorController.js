const mongoose = require('mongoose')
const Tutor = require('../models/TutorModel')
const nodemailer = require ('nodemailer');
const uniqid = require('uniqid');
const async = require('async');
const Review = require('../models/ReviewModel');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message. 
  On success (aka no error), you should send the listing(s) as JSON in the response.
  HINT: if you are struggling with implementing these functions refer back to this tutorial 
  https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/
  or
  https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d
  
  If you are looking for more understanding of exports and export modules - 
  https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
  or
  https://medium.com/@etherealm/named-export-vs-default-export-in-es6-affb483a0910
 */

/* Create a tutor */
exports.create = async (req, res) => {
    
    // if(req.comments) {
    //     tutor.comments = req.comments;
    // }
    // tutor.rating = null;
    // tutor.review = null;
    async.waterfall([
        function(done){
            const newTutor = new Tutor({
                tutorId: uniqid(),
                name: req.body.name,
                email: req.body.email,
                availability: req.body.availability,
                price: req.body.price,
                comments: req.body.comments,
                classes: req.body.classes,
                rating: -1,
                confirmed: false,
                deleteConfirmed: false,
                update: false
            })

            console.log(newTutor);
            
            let count = 0;
            let ratings = 0;
            Review.find({tutorEmail: newTutor.email}, function(err, revs){
                if(err) res.status(200).send(err);
                else{
                    console.log(revs);
                    if(revs.length != 0){
                        revs.forEach(element =>{
                            count = count + 1;
                            ratings = ratings + element.rating;
                        })

                        newTutor.rating = ratings/count;
                    }
                    done(null, newTutor);
                }
            })
        }, function(newTutor, done){
            newTutor.save(function(err) {
                if(err) {
                    res.statusCode = 400;
                    res.end({'error' : 'Tutor could not be saved'});
                } else{
                    let transport = nodemailer.createTransport({
                        host: "smtp.mailtrap.io",
                        port: 2525,
                        auth: {
                          user: "f7a2eb04d78a86", //generated by Mailtrap
                          pass: "ed26fed5bc0a7c" //generated by Mailtrap
                        }
                    })
        
                    let site = (process.env.NODE_ENV === 'production') ? "https://uf-tutor-match.herokuapp.com" : "localhost:3000"
                    let link = site + '/tutors/' + 'create/'+newTutor.tutorId;
                    let mailOptions = {
                        from: '"UF Tutor Match" <donotreply@uftutormatch.com>',
                        to: newTutor.email,
                        subject: 'New Tutor Post',
                        text: 'Thank you for creating a new tutor post. Click on the link below to activate your post.\n' + link,
                        html: '<p>Thank you for creating a new tutor post. Click on the link below to activate your post.</p><a href=' + link + '>Activate Post</a>'
                    }
            
                    transport.sendMail(mailOptions, (error, info) => {
                        if (error) {
                            return console.log(error);
                        }
                        console.log('Message sent: %s', info.messageId);
                    })
                    
                    res.send(newTutor);
                    done(null);
                }
            })

        }
    ], function(err){
        if(err) res.status(200).send(err);
    })
            

};

exports.postTutor = (req,res) =>{
    console.log(req.params.id);
    Tutor.updateOne({tutorId: req.params.id}, {confirmed: true}, function(err, tut){
        if(err) res.status(200).send(err);
        
        else res.status(200).json({message: "Post has been activated"});
    })
}


/* Show the current tutor */
exports.read = async (req, res) => {
    console.log(req.params.id);
    const tut = await Tutor.find({tutorId: req.params.id});
    
    if(!tut){
        res.status(200).json({error: "Tutor not found"});
    } else{
        res.status(200).json({tutor: tut});
    }
};

exports.delete = async (req, res) =>{
    console.log(req.body);
    Tutor.updateOne({tutorId: req.body.tutorId}, {deleteConfirmed: true}, function(err, tut){
        if(err) res.status(200).send(err);
        else if(tut.n === 0) res.status(200).json({message: "No tutor post found with that id"});
        else{
            let transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "f7a2eb04d78a86", //generated by Mailtrap
                    pass: "ed26fed5bc0a7c" //generated by Mailtrap
                }
            })

            let site = (process.env.NODE_ENV === 'production') ? "https://uf-tutor-match.herokuapp.com" : "localhost:3000"
            let link = site + '/tutors/' + 'delete/'+ req.body.tutorId;
            let mailOptions = {
                from: '"UF Tutor Match" <donotreply@uftutormatch.com>',
                to: req.body.email,
                subject: 'Delete Tutor Post',
                text: 'Thank you for using UF Tutor Post. Click on the link below to delete your post.\n' + link,
                html: '<p>Thank you for using UF Tutor Post. Click on the link below to delete your post.</p><a href=' + link + '>Delete Post</a>'
            }

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
            })
            
            res.status(200).json({message: "Tutor post set to be deleted"});
        }
    })
}

exports.deletePost = (req, res) =>{
    console.log(req.params.id);
    Tutor.deleteOne({tutorId: req.params.id, deleteConfirmed: true}, function(err, tut){
        if(err) res.status(200).send(err);
        else if(!tut) res.status(200).json({message: "No tutor post found"});
        else res.status(200).json({message: "Post has been deleted"});
    })
}

/* Retreive all the directory tutors, sorted alphabetically by tutor code */
exports.list = (req, res) => {
    Tutor.find({}, function(err, tutor) {
        if (err) {
            res.statusCode = 404;
            res.end({'error' : 'Tutor not found!'});
        } else {
            res.json(tutor);
        }
    });
};

exports.update = (req, res) =>{
    const newUpdate = new Tutor( {
        tutorId: req.body.tutorId,
        name: req.body.name,
        email: req.body.email,
        availability: req.body.availability,
        price: req.body.price,
        comments: req.body.comments,
        classes: req.body.classes,
        update: true
    })
    console.log(newUpdate);

    newUpdate.save(function(err){
        if(err) res.status(200).send(err);
        else{
            let transport = nodemailer.createTransport({
                host: "smtp.mailtrap.io",
                port: 2525,
                auth: {
                    user: "f7a2eb04d78a86", //generated by Mailtrap
                    pass: "ed26fed5bc0a7c" //generated by Mailtrap
                }
            })

            let site = (process.env.NODE_ENV === 'production') ? "https://uf-tutor-match.herokuapp.com" : "localhost:3000"
            let link = site + '/tutors/' + 'update/'+ req.body.tutorId;
            let mailOptions = {
                from: '"UF Tutor Match" <donotreply@uftutormatch.com>',
                to: req.body.oldEmail,
                subject: 'Update Tutor Post',
                text: 'Thank you for using UF Tutor Post. Click on the link below to update your post.\n' + link,
                html: '<p>Thank you for using UF Tutor Post. Click on the link below to update your post.</p><a href=' + link + '>Update Post</a>'
            }

            transport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
            })
            
            res.status(200).json({message: "Tutor post set to be updated"});
        }
    })

}

exports.postUpdates = async (req, res) => {
    console.log(req.params.id);

    let tutorToBeUpdated;
    let tutorToUpdate;
    async.waterfall([
        function(done){
            
            Tutor.findOne({tutorId: req.params.id, update: false}, function(err, tut){
                if(err) res.status(200).send(err);
                else{
                    tutorToBeUpdated = tut;
                    done(null, tutorToBeUpdated);
                }
            })

            
            
        }, function(tutorToBeUpdated, done){
            Tutor.findOne({tutorId: req.params.id, update: true}, function(err, tut){
                if(err) res.status(200).send(err);
                else{
                    tutorToUpdate = tut;
                    console.log(tutorToUpdate);
                    console.log(tutorToBeUpdated);
                    done(null, tutorToBeUpdated, tutorToUpdate);
                }
            })

        },function(tutorToBeUpdated, tutorToUpdate, done){
            const updatedTutor = new Tutor({
                tutorId: req.params.id,
                name: tutorToUpdate.name,
                email: tutorToUpdate.email,
                availability: tutorToUpdate.availability,
                price: tutorToUpdate.price,
                comments: tutorToUpdate.comments,
                classes: tutorToUpdate.classes,
                rating: tutorToBeUpdated.rating,
                confirmed: true,
                deleteConfirmed: false,
                update: false
            });
            console.log(updatedTutor);
            done(null, updatedTutor);
        }, function(updatedTutor, done){
            Tutor.deleteMany({tutorId: req.params.id}, function(err){
                if(err) res.status(200).send("Error");
                else{
                    done(null, updatedTutor)
                }
            })
        }, function(updatedTutor, done){
            updatedTutor.save(function(err){
                if(err) res.status(200).send("Error");

                else{res.status(200).send("Tutor post updated"); done(null);};
            })
            
        }

    ], function(err){
        if(err) res.status(200).send(err);
    })
}

/* 
  Middleware: find a tutor by its ID, then pass it to the next request handler. 
  HINT: Find the tutor using a mongoose query, 
        bind it to the request object as the property 'tutor', 
        then finally call next
 */
exports.tutorByID = (req, res, next, id) => {
    Tutor.findById(id).exec(function(err, tutor) {
        if (err) {
            res.statusCode = 404;
            res.end({'error' : 'Tutor not found!'});
        } else {
            req.tutor = tutor;
            next();
        }
    });
};