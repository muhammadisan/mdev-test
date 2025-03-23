export interface User {
  id: number;
  username: string;
  password: string;
}

// In-memory storage for users
export const users: User[] = [];
