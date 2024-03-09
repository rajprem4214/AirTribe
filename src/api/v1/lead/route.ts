import { Router } from 'express';
import { createLeadHandler, searchLeads, updateLeadStatus } from './handler';


const leadRouter = Router();
leadRouter.post('/new', createLeadHandler);
leadRouter.patch('/:id', updateLeadStatus);
leadRouter.get('/search', searchLeads);

export { leadRouter };