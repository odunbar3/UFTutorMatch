const reviews = require('../controllers/ReviewController');
const config = require('../config/config.js')
const express = require('express')
const mongoose = require('mongoose')
const reviewRouter = express.Router();

/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 
  Note: the tutors variable above and the file it is connected to help you trace
 */

reviewRouter.get('/list', reviews.list); //Get list of tutor's reviews
reviewRouter.post('/create', reviews.create); //Create a review

/*
  The ':' specifies a URL parameter. 
 */

reviewRouter.put('/create/:id', reviews.postReview) //Activates post

module.exports = reviewRouter;