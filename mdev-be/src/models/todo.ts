export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// In-memory array to store todos
export const todos: Todo[] = [
  { id: 1, title: 'Bermain papan', completed: false },
  { id: 2, title: 'Menyusun puzzle', completed: false },
  { id: 3, title: 'Minum cokelat panas', completed: false },
  { id: 4, title: 'Bermain tic tac toe', completed: false },
];
