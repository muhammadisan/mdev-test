import express from 'express';
import todoRoutes from './routes/todoRoutes';
import authRoutes from './routes/authRoutes';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);

export default app;