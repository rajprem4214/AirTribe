import { Router } from 'express';
import { createCourseHandler, updateCourseDetailsHandler } from './handler';


const courseRouter = Router();
courseRouter.post('/new', createCourseHandler);
courseRouter.patch('/:id', updateCourseDetailsHandler)

export { courseRouter };