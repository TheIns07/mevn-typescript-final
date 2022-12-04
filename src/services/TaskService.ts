import { Task } from '@/Interfaces/Task'
import { AxiosResponse } from 'axios'
import axios from './axios'

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
    await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> =>
    await axios.get(`/tasks/${id}`);

export const saveTask = async (task: Task) =>
    await axios.post('/tasks', task)

export const updateTask = async (id: string, task: Task): Promise<AxiosResponse<Task>> =>
    await axios.put(`/tasks/${id}`, task);

export const deleteTask = async (id: string): Promise<AxiosResponse> =>
    await axios.delete(`/tasks/${id}`)

