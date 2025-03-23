import { Request, Response } from 'express';
import * as authService from '../services/authService';

// Register new user
export const register = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const error = await authService.registerUser(username, password);
  if (error) {
    res.status(400).json({ message: error });
    return;
  }

  res.status(201).json({ message: 'User registered successfully' });
};

// Login user and generate JWT
export const login = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  const token = await authService.loginUser(username, password);
  if (!token) {
    res.status(400).json({ message: 'Invalid credentials' });
    return;
  }

  res.json({ token });
};

// Get user profile (protected by JWT)
export const getProfile = (req: Request, res: Response): void => {
  const userId = req.userId;

  if (!userId) {
    res.status(400).json({ message: 'User ID is missing' });
    return;
  }

  const user = authService.getUserProfile(userId);

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  res.json({ id: user.id, username: user.username });
};
