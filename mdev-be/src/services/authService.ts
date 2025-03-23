import bcrypt from 'bcryptjs';
import { users, User } from '../models/user';
import { generateToken } from '../utils/jwtUtils';

export const registerUser = async (username: string, password: string): Promise<string | null> => {
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return 'Username already taken';
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: users.length + 1,
    username,
    password: hashedPassword,
  };

  users.push(newUser);
  return null;
};

export const loginUser = async (username: string, password: string): Promise<string | null> => {
  const user = users.find(u => u.username === username);
  if (!user) {
    return null;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return null;
  }

  return generateToken(user.id);
};

export const getUserProfile = (userId: number): User | null => {
  const user = users.find(u => u.id === userId);
  return user || null;
};
