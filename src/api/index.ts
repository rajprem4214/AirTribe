import * as express from "express";
import { courseRouter } from "./v1/courses/routes";
import { instructorRouter } from "./v1/instructors/routes";
import { leadRouter } from "./v1/lead/route";
import { commentRouter } from "./v1/comment/route";

const apiV1Router = express.Router();

apiV1Router.use("/courses", courseRouter);
apiV1Router.use("/instructor", instructorRouter);
apiV1Router.use("/lead", leadRouter);
apiV1Router.use("/comment", commentRouter);

export { apiV1Router };
