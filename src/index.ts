import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { apiV1Router } from "./api"

AppDataSource.initialize().then(async () => {
    
    const app = express()
    app.use(bodyParser.json())

    app.use('/api/v1', apiV1Router);

    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
