import { PersistTaskType } from "../entity/task.type"
import TaskModel from '../entity/task-schema'

class TaskService {
  async create(data: PersistTaskType) {
    const task = await TaskModel.create(data)
    return task
  }

  async findAll() {
    const allTask = await TaskModel.find()
    return allTask
  }

  async findById(id: string) {
    const task = await TaskModel.findById(id)
    return task
  }

  async update(id: string, data: PersistTaskType) {
    const taskUpdated = await TaskModel.findByIdAndUpdate(id, data, { new: true })
    return taskUpdated
  }

  async delete(id: string) {
    await TaskModel.findByIdAndDelete(id)
  }
}

export default new TaskService()