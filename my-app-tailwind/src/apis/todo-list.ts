import axios from "axios";
import { BASE_URL } from "../configs/app";
import { ITodoList } from "../types";

export const getListTaskAPI = (): Promise<{ data: ITodoList[] }> => {
  return axios.get(`${BASE_URL}/users`);
};

export const addTaskAPI = (
  taskName: string
): Promise<{ data: ITodoList[] }> => {
  return axios.post(`${BASE_URL}/users`, {
    name: taskName,
  });
};

export const deleteTaskAPI = (id: string): Promise<{ data: ITodoList[] }> => {
  return axios.delete(`${BASE_URL}/users/${id}`);
};

export const editTaskAPI = (
  id: string,
  data: {
    name: string;
  }
): Promise<{ data: ITodoList[] }> => {
  return axios.put(`${BASE_URL}/users/${id}`, data);
};
