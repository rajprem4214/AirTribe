import { Request, Response } from 'express';
import { AppDataSource } from "../../../data-source"
import { Lead } from '../../../entity/Lead';

export const registerForCourse = async (req: Request, res: Response): Promise<void> => {
    try {
        const { course, name, email, phoneNumber, linkedInProfile } = req.body;

        const existingLead = await AppDataSource.getRepository(Lead).find({
            where: { course, email }
        });
        if (existingLead) {
            res.status(409).json({ error: 'Lead with this course ID and email already exists' });
            return;
        }

        // Create a new lead
        const lead = new Lead();
        lead.course = course;
        lead.name = name;
        lead.email = email;
        lead.phoneNumber = phoneNumber;
        lead.linkedInProfile = linkedInProfile;
        lead.status = 'Pending'; // Set initial status to 'Pending'

        // Save the lead to the database
        await AppDataSource.getRepository(Lead).save(lead);

        res.status(201).json(lead);
    } catch (error) {
        console.error('Error registering for course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
