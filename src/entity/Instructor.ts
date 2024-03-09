import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Course } from './Course';
import { Lead } from './Lead';
import { Comment } from './Comment';

@Entity()
export class Instructor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(() => Course, course => course.instructor)
    courses: Course[];

    @OneToMany(() => Lead, lead => lead.instructor)
    leads: Lead[];

    @OneToMany(() => Comment, comment => comment.instructor)
    comments: Comment[];
}
