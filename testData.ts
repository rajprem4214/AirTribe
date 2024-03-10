import { Lead } from './src/entity/Lead';
import { Course } from './src/entity/Course';
import { Instructor } from './src/entity/Instructor';
import { AppDataSource } from "./src/data-source"

export const loadData = async (): Promise<void> => {
    try {

        // Insert sample data
        const instructor1 = new Instructor();
        instructor1.name = 'John Doe';
        instructor1.email = 'john.doe@example.com';
        await AppDataSource.getRepository(Instructor).save(instructor1);

        const instructor2 = new Instructor();
        instructor2.name = 'Jane Smith';
        instructor2.email = 'jane.smith@example.com';
        await AppDataSource.getRepository(Instructor).save(instructor2);

        // Insert sample courses
        const course1 = new Course();
        course1.name = 'Sample Course 1';
        course1.maxSeats = 20;
        course1.startDate = new Date();
        course1.instructor = instructor1;
        await AppDataSource.getRepository(Course).save(course1);

        const course2 = new Course();
        course2.name = 'Sample Course 2';
        course2.maxSeats = 15;
        course2.startDate = new Date();
        course2.instructor = instructor2;
        await AppDataSource.getRepository(Course).save(course2);

        // Insert sample leads
        const lead1 = new Lead();
        lead1.name = 'Alice Smith';
        lead1.email = 'alice.smith@example.com';
        lead1.phoneNumber = '1234567890';
        lead1.linkedInProfile = 'https://www.linkedin.com/in/alicesmith/';
        lead1.status = 'Pending';
        lead1.course = course1;
        await AppDataSource.getRepository(Lead).save(lead1);

        const lead2 = new Lead();
        lead2.name = 'Bob Johnson';
        lead2.email = 'bob.johnson@example.com';
        lead2.phoneNumber = '9876543210';
        lead2.linkedInProfile = 'https://www.linkedin.com/in/bobjohnson/';
        lead2.status = 'Accepted';
        lead2.course = course2;
        await AppDataSource.getRepository(Lead).save(lead2);


        console.log('Test data loaded successfully.');
    } catch (error) {
        console.error('Error loading test data:', error);
    }
};

