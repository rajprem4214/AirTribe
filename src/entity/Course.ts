import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Instructor } from './Instructor';
import { Lead } from './Lead';

@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Instructor, instructor => instructor.courses)
    instructor: Instructor;

    @Column()
    name: string;

    @Column()
    maxSeats: number;

    @Column()
    startDate: Date;

    @OneToMany(() => Lead, lead => lead.course)
    leads: Lead[];
}
