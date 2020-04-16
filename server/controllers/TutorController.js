import mongoose from 'mongoose';
import Tutor from '../models/TutorModel.js';

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
export const create = async (req, res) => {
    var tutor = new Tutor(req.body);
    if(req.comments) {
        tutor.comments = req.comments;
    }
    tutor.rating = null;
    tutor.review = null;
    tutor.save(function(err) {
        if(err) {
            res.statusCode = 400;
            res.end({'error' : 'Tutor could not be saved'});
        } else {
            res.send(tutor);
        }
    });
};

/* Show the current tutor */
export const read = (req, res) => {
    res.json(req.tutor);
};

/* Update a tutor - note the order in which this function is called by the router*/
// export const update = (req, res) => {
//     const tutor = req.tutor;

//     if (req.body.code && req.body.name && req.body.address) {
//         tutor.code = req.body.code;
//         tutor.name = req.body.name;
//         tutor.address = req.body.address;
//     }
//     if(req.rating) {
//         tutor.rating = req.rating;
//     }

//     tutor.save(function(err) {
//         if(err) {
//             res.statusCode = 400;
//             res.end({'error' : 'Tutor could not be saved'});
//         } else {
//             res.send(tutor);
//         }
//     });
// };

/* Delete a tutor */
// export const remove = (req, res) => {
//     Listing.deleteOne({code : req.params.code}, function(err, listing) {
//         if (err) {
//             res.statusCode = 404;
//             res.end({'error' : 'Listing not found!'});
//         } else {
//             res.json(listing);
//         }
//     });
// };

/* Retreive all the directory tutors, sorted alphabetically by tutor code */
export const list = (req, res) => {
    Tutor.find({}, function(err, tutor) {
        if (err) {
            res.statusCode = 404;
            res.end({'error' : 'Tutor not found!'});
        } else {
            res.json(tutor);
        }
    });
};

/* 
  Middleware: find a tutor by its ID, then pass it to the next request handler. 
  HINT: Find the tutor using a mongoose query, 
        bind it to the request object as the property 'tutor', 
        then finally call next
 */
export const tutorByID = (req, res, next, id) => {
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