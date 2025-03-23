import express from 'express';
import { register, login, getProfile } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = express.Router();

router
  .post('/register', register)
  .post('/login', login)
  .get('/profile', authMiddleware, getProfile);

export default router;
