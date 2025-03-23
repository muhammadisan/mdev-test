import { Router } from 'express';
import {
  getAllData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from '../controllers/dataController';

const router = Router();

router.get('/', getAllData)
  .get('/:id', getDataById)
  .post('/', createData)
  .put('/:id', updateData)
  .delete('/:id', deleteData);

export default router;
