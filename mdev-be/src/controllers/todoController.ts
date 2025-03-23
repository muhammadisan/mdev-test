import { Request, Response } from 'express';
import * as todoService from '../services/todoService';

// Get all todos
export const getTodos = (req: Request, res: Response): void => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

// Get single todo by ID
export const getTodo = (req: Request, res: Response): void => {
  const todo = todoService.getTodoById(Number(req.params.id));
  if (!todo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  res.json(todo);
};

// Create a new todo
export const createTodo = (req: Request, res: Response): void => {
  const { title } = req.body;
  if (!title) {
    res.status(400).json({ message: 'Title is required' });
    return;
  }

  const newTodo = todoService.createTodo(title);
  res.status(201).json(newTodo);
};

// Update an existing todo
export const updateTodo = (req: Request, res: Response): void => {
  const { id } = req.params;
  const updatedTodo = todoService.updateTodo(Number(id), req.body);

  if (!updatedTodo) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  res.json(updatedTodo);
};

// Delete a todo by ID
export const deleteTodo = (req: Request, res: Response): void => {
  const isDeleted = todoService.deleteTodo(Number(req.params.id));

  if (!isDeleted) {
    res.status(404).json({ message: 'Todo not found' });
    return;
  }
  res.status(204).send();
};
