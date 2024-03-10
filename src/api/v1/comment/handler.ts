import { Request, Response } from 'express';
import { AppDataSource } from "../../../data-source"
import { Lead } from '../../../entity/Lead';
import { Comment } from '../../../entity/Comment';

export const addCommentHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { leadId, text, instructor } = req.body;

        // Retrieve the lead from the database
        const leadRepository = AppDataSource.getRepository(Lead);
        const lead = await leadRepository.findOneBy({ id: leadId });

        if (!lead) {
            res.status(404).json({ error: 'Lead not found' });
            return;
        }

        // Create a new comment
        const comment = new Comment();
        comment.lead = lead;
        comment.commentText = text;
        comment.instructor = instructor;

        // Save the comment to the database
        await AppDataSource.getRepository(Comment).save(comment);

        res.status(201).json(comment);
    } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
