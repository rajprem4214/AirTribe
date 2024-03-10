import { Request, Response } from 'express';
import { AppDataSource } from "../../../data-source"
import { Course } from '../../../entity/Course';

export const createCourseHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, maxSeats, startDate, instructorId } = req.body;
        const course = new Course();
        course.name = name;
        course.maxSeats = maxSeats;
        course.startDate = startDate;
        course.instructor = instructorId;
        await AppDataSource.getRepository(Course).save(course);
        res.status(201).json(course);
    } catch (error) {
        console.error('Error creating course:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export const updateCourseDetailsHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const id: number = parseInt(req.params.id);
        const { name, maxSeats, startDate } = req.body;

        const courseRepository = AppDataSource.getRepository(Course);
        const course = await courseRepository.findOneBy({ id });

        if (!course) {
            res.status(404).json({ error: 'Course not found' });
            return;
        }

        // Update course details if provided in the request body
        if (name !== undefined) {
            course.name = name;
        }
        if (maxSeats !== undefined) {
            course.maxSeats = maxSeats;
        }
        if (startDate !== undefined) {
            course.startDate = startDate;
        }

        await courseRepository.save(course);

        res.status(200).json(course);
    } catch (error) {
        console.error('Error updating course details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};