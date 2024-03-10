import { Request, Response } from 'express';
import { AppDataSource } from "../../../data-source"
import { ILike } from 'typeorm';
import { Lead } from '../../../entity/Lead';

export const createLeadHandler = async (req: Request, res: Response): Promise<void> => {
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


export const updateLeadStatusHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id);
        const { status } = req.body;

        // Retrieve the lead from the database
        const leadRepository = AppDataSource.getRepository(Lead);
        const lead = await leadRepository.findOneBy({ id });

        if (!lead) {
            res.status(404).json({ error: 'Lead not found' });
            return;
        }

        if (status !== undefined) {
            lead.status = status;
        }


        // Save the updated lead back to the database
        await leadRepository.save(lead);

        res.status(200).json(lead);
    } catch (error) {
        console.error('Error updating lead status:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const searchLeads = async (req: Request, res: Response): Promise<void> => {
    try {
        const { query } = req.query;

        // Retrieve leads from the database based on name or email
        const leadRepository = AppDataSource.getRepository(Lead);
        const leads = await leadRepository
            .createQueryBuilder('lead')
            .where('lead.name ILIKE :query OR lead.email ILIKE :query', { query: `%${query}%` })
            .cache(true) // Enable query caching
            .getMany();

        res.status(200).json(leads);
    } catch (error) {
        console.error('Error searching leads:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};