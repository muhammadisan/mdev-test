import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwtUtils';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from "Bearer TOKEN"

  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
    return;
  }

  try {
    const decoded = verifyToken(token) as { userId: number };
    req.userId = decoded.userId; 
    next();
  } catch {
    res.status(401).json({ message: 'Invalid token' });
  }
};
