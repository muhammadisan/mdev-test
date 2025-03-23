import express from 'express';
import todoRoutes from './routes/todoRoutes';
import authRoutes from './routes/authRoutes';
import dataRoutes from './routes/dataRoutes';
import bodyParser from 'body-parser';
import logger from './utils/logger';

const app = express();
app.use(bodyParser.json());

app.use('/api/todos', todoRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/data', dataRoutes);

// Global error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  logger.error(`Unhandled error: ${err.stack || err.message}`);
  res.status(500).json({ message: 'InternalServerError: Please check log for detailed error' });
});

export default app;