import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Lead } from './Lead';
import { Instructor } from './Instructor';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Lead, lead => lead.comments)
    lead: Lead;

    @ManyToOne(() => Instructor, instructor => instructor.comments)
    instructor: Instructor;

    @Column()
    commentText: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}
