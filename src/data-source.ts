import "reflect-metadata"
import { DataSource } from "typeorm"
import { Course } from "./entity/Course"
import { Instructor } from "./entity/Instructor"
import { Comment } from "./entity/Comment"
import { Lead } from './entity/Lead';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "prem",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Course, Instructor, Comment, Lead],
    migrations: [],
    subscribers: [],
})
