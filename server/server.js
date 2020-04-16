
 
// import path from 'path';
// import mongoose from 'mongoose';
// import morgan from 'morgan';
// import bodyParser from 'body-parser';
// import config from './config/config.js';
// import tutorsRouter from './routes/TutorsRouter.js';

const express = require('./config/express.js')
// //connect to database
// mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
//     console.log(`Successfully connected to mongoose database.`)
// });

// //initialize app
// const app = express();

// //enable request logging for development debugging
// app.use(morgan('dev'));

// //body parsing middleware
// app.use(bodyParser.urlencoded({
//     extended: true
// }));

// app.use(bodyParser.json());

// /* serve static files - see http://expressjs.com/en/starter/static-files.html */
// app.use('/', express.static('./../../client'));

// /* The next three middleware are important to the API that we are building */

// /* Request Handler for route /api/tutors
//    TODO: Update the code to meet the required format - app.use('/api/tutors', appropriateMiddleWare)
//    use the tutors router middleware for requests to the api
//    check the variables list above
// */
// app.use('/api/tutors/', tutorsRouter);


// /* Request handler for all other routes
//    Sends a response (res) to go to the homepage for all routes not specified */
// app.all('/*', (req, res) => {

//     /*Add YOUR CODE HERE
//        see https://expressjs.com/en/api.html#res.sendFile
//        see https://nodejs.org/api/path.html
//        The path.resolve() method returns a string and resolves a sequence of paths or path segments into an absolute path.
//        If no path segments are passed, path.resolve() will return the absolute path of the current working directory.
//     */
//     res.sendFile(path.resolve('client/index.html'));
// });

// Use env port or default
const port = process.env.PORT || 5000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));