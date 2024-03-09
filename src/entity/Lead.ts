import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Course } from './Course';
import { Instructor } from './Instructor';
import { Comment } from './Comment';

@Entity()
export class Lead {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Course, course => course.leads)
    course: Course;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phoneNumber: string;

    @Column()
    linkedInProfile: string;
    
    @ManyToOne(() => Instructor, instructor => instructor.leads)
    instructor: Instructor;

    @Column()
    status: string; // e.g., 'Pending', 'Accepted', 'Rejected', 'Waitlisted'

    @OneToMany(() => Comment, comment => comment.lead)
    comments: Comment[];

}
