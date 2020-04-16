import mongoose from 'mongoose';

/* Create your schema for the data in the tutors.json file that will define how data is saved in your database
     See https://mongoosejs.com/docs/guide.html for examples for creating schemas
     See also https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
  */
const tutorSchema = new mongoose.Schema({
  /* Your code for a schema here */
  name: {type: String, required: true},
  email: {type: String, required: true},
  availability: {type: String, required: true},
  price: {type: String, required: true},
  comments: {type: String, required: false},
  classes: [{type: String, required: false}],
  rating: {type: mongoose.Number, required: false},
  review: [{type: reviewSchema, required: false}]
  //Check out - https://mongoosejs.com/docs/guide.html
});

const reviewSchema = new mongoose.Schema({
    /* Your code for a schema here */
    studentName: {type: String, required: true},
    review: {type: String, required: true}
    //Check out - https://mongoosejs.com/docs/guide.html
  });

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('tutors', tutorSchema);