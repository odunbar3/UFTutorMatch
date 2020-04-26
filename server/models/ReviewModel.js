const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    /* Your code for a schema here */
    studentId: {type: String},
    studentName: {type: String, required: true},
    review: {type: String, required: true},
    rating: {type: Number},
    tutorEmail: {type: String, required: true},
    studentEmail: {type: String, required: true},
    confirmed: {type: Boolean}
    //Check out - https://mongoosejs.com/docs/guide.html
  });

const Review = mongoose.model('reviewdbs', reviewSchema);
module.exports = Review;