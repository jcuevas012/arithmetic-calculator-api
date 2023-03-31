import 'express-async-errors'
import express from 'express';
import { userRoutes } from './routes/user';

const app = express();

app.use(express.json())

app.use('/api/users', userRoutes)

export { app }