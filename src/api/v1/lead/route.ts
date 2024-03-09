import { Router } from 'express';
import { createLeadHandler } from './handler';


const leadRouter = Router();
leadRouter.post('/new', createLeadHandler);

export { leadRouter };