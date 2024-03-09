import { Router } from 'express';
import { createInstructor } from './handler';


const instructorRouter = Router();
instructorRouter.post('/new', createInstructor);

export { instructorRouter };