import { todos, Todo } from '../models/todo';

export const getAllTodos = (): Todo[] => todos;

export const getTodoById = (id: number): Todo | undefined =>
  todos.find(todo => todo.id === id);

export const createTodo = (title: string): Todo => {
  const newTodo: Todo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, updatedFields: Partial<Todo>): Todo | null => {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex === -1) return null;

  todos[todoIndex] = { ...todos[todoIndex], ...updatedFields };
  return todos[todoIndex];
};

export const deleteTodo = (id: number): boolean => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) return false;

  todos.splice(index, 1);
  return true;
};
