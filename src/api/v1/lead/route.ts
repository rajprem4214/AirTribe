import { Router } from 'express';
import { registerForCourse } from './handler';


const leadRouter = Router();
leadRouter.post('/new', registerForCourse);

export { leadRouter };