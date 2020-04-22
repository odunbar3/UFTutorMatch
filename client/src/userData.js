import axios from 'axios';

const userData = axios.create();

//Get all confirmed tutors
userData.getTutors() = async function(){
    const response = await axios.get('/tutors/list');

    return response.tutors;
}

//Create Tutor post
userData.createTutorPost() = async function(tutor){
    const tutorsPost = await axios.post('/tutors/create', tutor);
    const response = {
        errors: "",
        created: false,
    }

    if(tutorsPost.errors){
        response.errors = tutorsPost.errors;
    } else{
        response.created = true;
    }

    return response;
}

//Activate post
userData.activatePost() = async function(tutorId){
    const tutorsPost = await axios.put('/tutors/create/'+tutorId);

    return tutorsPost;
}

//Find Tutor Post
userData.findTutorPost() = async function(email){
    const tutor = await axios.get('/tutors/find', email);

    return tutor;
}

//Delete Tutor post
userData.deleteTutorPost() = async function(email){
    const deletePost = await axios.put('/tutors/delete', email);

    return deletePost;
}

//Fully delete the tutor post
userData.activateDeletion = async function(tutorId){
    const deletePost = await axios.delete('/tutors/delete/' + tutorId);

    return deletePost;
}

//Update Tutor post
userData.updateTutorPost() = async function(updates){
    const updatePost = await axios.put('/tutors/update', updates);

    return updatePost;
}

//Activate updates
userData.activateUpdates() = async function(tutorId){
    const updatePost = await axios.put('/tutors/update/' + tutorId);

    return updatePost;   
}

//List reviews
userData.getReviews() = async function(tutorEmail){
    const reviews = await async.get('/reviews/list');

    return reviews;
}

//Post review
userData.activateUpdates() = async function(review){
    const review = await axios.post('/reviews/create', review);

    return review;   
}


//Activate review
userData.activateUpdates() = async function(studentId){
    const review = await axios.put('/reviews/create/' + studentId);

    return review;   
}

//Search by class
userData.searchClass() = async function(searchClass){
    const tutors = await axios.get('tutors/search', searchClass);

    return tutors;
}
