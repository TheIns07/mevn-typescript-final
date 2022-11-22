import { Task } from '@/Interfaces/Task'
import axios from './axios'

export const getTasks = async () => await axios.get("/tasks")

export const saveTask = async(task: Task) => {
    await axios.post('/tasks', task)
}