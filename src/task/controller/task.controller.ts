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

  async findByCategoryId(req: Request, res: Response) {
    const tasksFiltered = await taskService.findByCategoryId(req.params.categoryId)
    return res.status(200).send(tasksFiltered)
  }

  async findByStatus(req: Request, res: Response) {
    const tasksFiltered = await taskService.findByStatus(req.params.status)
    return res.status(200).send(tasksFiltered)
  }

  async findByDueAtPeriod(req: Request, res: Response) {
    const initialDate = new Date(req.params.initialDate)
    const endDate = new Date(req.params.endDate)
    const tasksFiltered = await taskService.findByDueAtPeriod(initialDate, endDate)
    return res.status(200).send(tasksFiltered)
  }

  async getFirstTaskByUserId(req: Request, res: Response) {
    const tasksFiltered = await taskService.getFirstTaskByUserId(req.params.userId)
    return res.status(200).send(tasksFiltered)
  }
  
  async getLastTaskByUserId(req: Request, res: Response) {
    const tasksFiltered = await taskService.getLastTaskByUserId(req.params.userId)
    return res.status(200).send(tasksFiltered)
  }

  async getCountByUserId(req: Request, res: Response) {
    const count = await taskService.getCountByUserId(req.params.userId)
    return res.status(200).send(count)
  }

  async getTasksByAllCategories(req: Request, res: Response) {
    const tasks = await taskService.getTasksByAllCategories()
    return res.status(200).send(tasks)
  }

  async getTasksWithGreaterDescription(req: Request, res: Response) {
    const task = await taskService.getTasksWithGreaterDescription()
    return res.status(200).send(task)
  }

  async averageDoneTasks(req: Request, res: Response) {
    const average = await taskService.averageDoneTasks()
    return res.status(200).send(average)
  }
}

export default new TaskController()