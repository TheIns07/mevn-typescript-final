import { Router } from 'express'
import Task from '../models/Task';

const router = Router()

router.get('/tasks', async (req, res) => {
   const tasks = await Task.find()
   console.log(tasks)
   res.send(tasks)
});

router.post('/tasks', async (req, res) => {
   const { client, product, price, quantity, date } = req.body
   const task = new Task({ client, product, price, quantity, date })
   await task.save()
   res.json(task)
});

router.get('/tasks/:id', async (req, res) => {
   const task = await Task.findById(req.params.id)
   res.send(task)
});

router.delete('/tasks/:id', async (req, res) => {
   const task = await Task.findByIdAndDelete(req.body.id)
   return res.json(task)
});

router.put('/tasks/:id', async (req, res) => {
   const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
   })
   res.json(updatedTask);
});

export default router;