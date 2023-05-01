import 'express-async-errors'

import { json } from 'body-parser'
import express, { Application } from 'express'
import logger from 'morgan'

import { userRoutes } from './routes/user';
import { NotFoundError } from '../domain/entities/Error/not-found-error';
import { errorHandler } from '../infrastructure/middlewares/error-handler';
import { operationRoutes } from './routes/operation';
import { recordRoutes } from './routes/records';

const app: Application = express()

app.use(logger('dev'))
app.use(json())

app.get('/api/health', (_req, res) => {
    res.send({ success: true }).status(200)
})
app.use('/api/users', userRoutes)
app.use('/api/operations', operationRoutes)
app.use('/api/records', recordRoutes)

app.all('*', () => {
    throw new NotFoundError()
})



app.use(errorHandler)


export { app }