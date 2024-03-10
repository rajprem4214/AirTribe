import { Router } from 'express';
import { createInstructorHandler } from './handler';


const instructorRouter = Router();
instructorRouter.post('/new', createInstructorHandler);

export { instructorRouter };