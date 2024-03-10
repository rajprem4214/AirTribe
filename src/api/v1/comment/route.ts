import { Router } from 'express';
import { addCommentHandler } from './handler';


const commentRouter = Router();
commentRouter.post('/add', addCommentHandler);


export { commentRouter };