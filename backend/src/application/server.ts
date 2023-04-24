import 'express-async-errors'

import { json } from 'body-parser'
import cookieSession from 'cookie-session'
import express, { Application } from 'express'

import { userRoutes } from './routes/user';
import { NotFoundError } from '../domain/entities/Error/not-found-error';
import { errorHandler } from '../infrastructure/middlewares/error-handler';
import { operationRoutes } from './routes/operation';

const app: Application = express()

app.set('trust proxy', 1) // trust first proxy

app.use(json())


app.use(
    cookieSession({
        signed: false,
        secure: false,
    }),
)


app.get('/', (_req, res) => {
    res.send({ status: 'ok' }).status(200)
})


app.get('/api/health', (_req, res) => {
    res.send({ success: true }).status(200)
})


app.use('/api/users', userRoutes)
app.use('/api/operations', operationRoutes)

app.all('*', () => {
    throw new NotFoundError()
})

app.use(errorHandler)

app.use(express.json())



export { app }