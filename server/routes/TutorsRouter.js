const tutors = require('../controllers/TutorController');
// const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')
const tutorsRouter = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 
  Note: the tutors variable above and the file it is connected to help you trace
 */

tutorsRouter.get('/list', tutors.list); //Get list of tutor posts
tutorsRouter.post('/create', tutors.create); //Create a tutor post

/*
  The ':' specifies a URL parameter. 
 */
tutorsRouter.post('/find', tutors.read); //Read tutor post
tutorsRouter.put('/create/:id', tutors.postTutor) //Activates post
tutorsRouter.put('/delete', tutors.delete) //Set post up to be deleted => send back tutorId and email
tutorsRouter.delete('/delete/:id', tutors.deletePost) //Actually delete post (from link sent to user)
tutorsRouter.put('/update', tutors.update) //Set post up to be updated => send back user elements that can change, oldEmail and id
tutorsRouter.put('/update/:id', tutors.postUpdates) //Actually update post
tutorsRouter.get('/search', tutors.search)

//tutorsRouter.put('/:tutorId', tutors.update); //Update tutor post
//tutorsRouter.delete('/:tutorId', tutors.remove); //Delete tutor post

tutorsRouter.param('tutorId', tutors.tutorByID); // this line is required to let middleware run tutorByID().

module.exports = tutorsRouter;