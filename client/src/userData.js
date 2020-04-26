import axios from 'axios';

const userData = axios.create();

//Get all confirmed tutors
userData.getTutors = async function(){
    const response = await axios.get('/tutors/list');


    return response.data.tutors;
};

//Create Tutor post
userData.createTutorPost = async function(tutor){
    const tutorsPost = await axios.post('/tutors/create', tutor);
    const response = {
        errors: "",
        created: false,
    }
    console.log(tutorsPost);
    if(tutorsPost.data.errors){
        response.errors = tutorsPost.errors;
    } else{
        response.created = true;
    }

    console.log(response);
    return response;
};

//Activate post
userData.activatePost = async function(pathName){
    const tutorsPost = await axios.put(pathName);
    console.log(tutorsPost);

    return tutorsPost;
};

//Find Tutor Post
userData.findTutorPost = async function(email){
    console.log(email);
    const response = await axios.post('/tutors/find', {email:email.email});
    console.log(response);

    return response.data.tutor;
};

//Delete Tutor post
userData.deleteTutorPost = async function(email){
    const deletePost = await axios.put('/tutors/delete', email);

    return deletePost;
};

//Fully delete the tutor post
userData.activateDeletion = async function(pathName){
    const deletePost = await axios.delete(pathName);

    return deletePost;
};

//Update Tutor post
userData.updateTutorPost = async function(updates){
    const updatePost = await axios.put('/tutors/update', updates);

    return updatePost;
};

//Activate updates
userData.activateUpdates = async function(pathName){
    const updatePost = await axios.put(pathName);

    return updatePost;   
};

//List reviews
userData.getReviews = async function(tutorEmail){
    console.log(tutorEmail);
    const reviews = await axios.post('/reviews/list', tutorEmail);
    console.log(reviews)
    return reviews.data.revs;
};

//Post review
userData.createReview = async function(review){
    const activeReview = await axios.post('/reviews/create', review);

    return activeReview;   
};


//Activate review
userData.activateReview = async function(pathName){
    const review = await axios.put(pathName);

    return review;   
};

export default userData;