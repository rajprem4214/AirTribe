import { Router } from 'express';
import { createLeadHandler, searchLeads, updateLeadStatusHandler } from './handler';


const leadRouter = Router();
leadRouter.post('/new', createLeadHandler);
leadRouter.patch('/:id', updateLeadStatusHandler);
leadRouter.get('/search', searchLeads);

export { leadRouter };