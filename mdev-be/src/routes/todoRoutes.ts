import { Router } from 'express';
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controllers/todoController';

const router = Router();

router
  .get('/', getTodos)
  .get('/:id', getTodo)
  .post('/', createTodo)
  .put('/:id', updateTodo)
  .delete('/:id', deleteTodo);

export default router;
