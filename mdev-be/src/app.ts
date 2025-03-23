import express from 'express';
import todoRoutes from './routes/todoRoutes';
import authRoutes from './routes/authRoutes';
import dataRoutes from './routes/dataRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

export default app;