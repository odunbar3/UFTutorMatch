import * as tutors from '../controllers/TutorController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const tutorsRouter = express.Router();
/* 
  These method calls are responsible for routing requests to the correct request handler.
  Take note that it is possible for different controller functions to handle requests to the same route.
 
  Note: the tutors variable above and the file it is connected to help you trace
 */
tutorsRouter.get('/', tutors.list);
tutorsRouter.post('/', getCoordinates, tutors.create);

/*
  The ':' specifies a URL parameter. 
 */
tutorsRouter.get('/:tutorId', tutors.read);
tutorsRouter.put('/:tutorId', getCoordinates, tutors.update);
tutorsRouter.delete('/:tutorId', tutors.remove);

tutorsRouter.param('tutorId', tutors.tutorByID); // this line is required to let middleware run tutorByID().

export default tutorsRouter;