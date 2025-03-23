import { Request, Response } from 'express';
import * as dataService from '../services/dataService';

export const getAllData = (req: Request, res: Response): void => {
  const data = dataService.getAllData();
  res.json(data);
};

export const getDataById = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const item = dataService.getDataById(id);
  if (!item) {
    res.status(404).json({ message: 'Data not found' });
    return;
  }
  res.json(item);
};

export const createData = (req: Request, res: Response): void => {
  const { value } = req.body;
  if (!value) {
    res.status(400).json({ message: 'Value is required' });
    return;
  }
  const newItem = dataService.createData(value);
  res.status(201).json(newItem);
};

export const updateData = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const { value } = req.body;
  if (!value) {
    res.status(400).json({ message: 'Value is required' });
    return;
  }
  const updatedItem = dataService.updateData(id, value);
  if (!updatedItem) {
    res.status(404).json({ message: 'Data not found' });
    return;
  }
  res.json(updatedItem);
};

export const deleteData = (req: Request, res: Response): void => {
  const id = Number(req.params.id);
  const isDeleted = dataService.deleteData(id);
  if (!isDeleted) {
    res.status(404).json({ message: 'Data not found' });
    return;
  }
  res.status(204).send();
};
