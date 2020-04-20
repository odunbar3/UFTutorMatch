import axios from 'axios';

const userData = axios.create();

//Get all confirmed tutors
userData.getTutors() = async function(){
    const response = await axios.get('/tutors/list');

    return response.tutors;
}

//Create 