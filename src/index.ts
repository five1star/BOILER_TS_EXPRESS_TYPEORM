import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { AppRoutes } from "./routes";
import * as morgan from "morgan";


const dotenv = require('dotenv').config()

createConnection()
  .then(() => console.log("typeorm connection complete"))
  .catch(error => console.log('TypeORM connection error: ', error))

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false});
app.use(morgan("dev"));



AppRoutes.forEach(route => {
  app[route.method](
    route.path,
    (req: express.Request, res: express.Response, next: Function) => {
      route
        .action(req, res)
        .then(() => next)
        .catch(err => next(err))
    },
  )
})

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`),
)
