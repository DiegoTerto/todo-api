import { Request, Response } from 'express'
import taskService from '../service/task.service'

class TaskController {
  async create(req: Request, res: Response) {
    const task = await taskService.create(req.body)
    return res.status(201).send(task)
  }

  async findAll(req: Request, res: Response) {
    const tasks = await taskService.findAll()
    return res.status(200).send(tasks)
  }

  async findById(req: Request, res: Response) {
    const task = await taskService.findById(req.params.id)
    return res.status(200).send(task);
  }

  async update(req: Request, res: Response) {
    const taskUpdated = await taskService.update(req.params.id, req.body)
    return res.status(200).send(taskUpdated)
  }

  async delete(req: Request, res: Response) {
    await taskService.delete(req.params.id)
    return res.status(203)
  }
}

export default new TaskController()