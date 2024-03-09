import { Router } from 'express';
import { createCourseHandler, updateCourseDetails } from './handler';


const courseRouter = Router();
courseRouter.post('/new', createCourseHandler);
courseRouter.patch('/:id', updateCourseDetails)

export { courseRouter };