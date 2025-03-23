import { data, Data } from '../models/data';

export const getAllData = (): Data[] => {
  return data;
};

export const getDataById = (id: number): Data | null => {
  const item = data.find(d => d.id === id);
  return item || null;
};

export const createData = (newData: string): Data => {
  const newItem: Data = { id: Date.now(), value: newData };
  data.push(newItem);
  return newItem;
};

export const updateData = (id: number, updatedData: string): Data | null => {
  const index = data.findIndex(d => d.id === id);
  if (index === -1) return null;
  data[index].value = updatedData;
  return data[index];
};

export const deleteData = (id: number): boolean => {
  const index = data.findIndex(d => d.id === id);
  if (index === -1) return false;
  data.splice(index, 1);
  return true;
};
