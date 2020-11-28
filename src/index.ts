import 'reflect-metadata'
import {createConnection} from 'typeorm'
import {Request, Response} from 'express'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import {AppRoutes} from './routes'

const dotenv = require('dotenv').config()

createConnection()
  .then(async connection => {
    const app = express()
    app.use(bodyParser.json())

    AppRoutes.forEach(route => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: Function) => {
          route
            .action(request, response)
            .then(() => next)
            .catch(err => next(err))
        },
      )
    })

    app.listen(process.env.PORT, () =>
      console.log(`server running on port ${process.env.PORT}`),
    )
  })
  .catch(error => console.log('TypeORM connection error: ', error))
