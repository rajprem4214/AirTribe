import { Router } from 'express';
import { addComment } from './handler';


const commentRouter = Router();
commentRouter.post('/add', addComment);


export { commentRouter };