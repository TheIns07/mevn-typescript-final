import { Task } from '@/Interfaces/Task'
import { AxiosResponse } from 'axios'
import axios from './axios'

export const getTasks = async (): Promise<AxiosResponse<Task[]>> => 
await axios.get("/tasks");

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => 
await axios.get("/tasks/"+ id);

export const saveTask = async(task: Task) => {
    await axios.post('/tasks', task);
}

export const updateTask = async(id: string, task: Task) => {
    await axios.put("/tasks/"+ id, task);
}

export const deleteTasks = async (id: string): Promise<AxiosResponse<Task>> => 
await axios.delete("/tasks"+id);

