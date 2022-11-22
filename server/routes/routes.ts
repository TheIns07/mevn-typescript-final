import { Router } from 'express'
import Task from '../models/Task';

const router = Router()

router.get('/', (req, res) => {
   res.send("Obteniendo tareas")
});

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
   try {
      const task = Task.findById(req.params.id)
      if(!task) return res.status(404).json({message : "Task not found" })
      res.send(task)

   } catch (error) {
     return res.status(500).send(error)
   }

});

router.delete('/tasks/:id', async (req, res) => {
   try {
      const task = await Task.findByIdAndDelete(req.body.id)
      if(!task) return res.status(404).json({message: "Task not found"})
   return res.json(task)
   } catch (error) {
      return res.status(500).send(error)
   }
   
});

router.put('/tasks/:id', async (req, res) => {
  const tasks = await Task.findByIdAndUpdate(req.body.id, req.body, {
      new: true
  })
  res.json(tasks);
});

export default router;