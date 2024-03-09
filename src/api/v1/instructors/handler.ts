// controllers/instructorController.ts
import { Request, Response } from 'express';
import { AppDataSource } from "../../../data-source"
import { Instructor } from '../../../entity/Instructor';

export const createInstructor = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email } = req.body;
        const instructor = new Instructor();
        instructor.name = name;
        instructor.email = email;
        await AppDataSource.getRepository(Instructor).save(instructor);
        res.status(201).json(instructor);
    } catch (error) {
        console.error('Error creating instructor:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
