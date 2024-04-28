import { TaskStatus } from '../entity/status.enum'
import TaskModel from '../entity/task-schema'
import { Task } from '../entity/task.type'

class TaskService {
  async create(data) {
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

  async update(id: string, data) {
    const taskUpdated = await TaskModel.findByIdAndUpdate(id, data, { new: true })
    return taskUpdated
  }

  async delete(id: string) {
    await TaskModel.findByIdAndDelete(id)
  }

  async findByCategoryId(categoryId: string) {
    const tasks = await TaskModel.find()
    const tasksFiltered = tasks.filter(task => task.category.toString() === categoryId );
    return tasksFiltered;
  }

  async findByStatus(status: string) {
    const tasks = await TaskModel.find();

    const tasksFiltered = tasks.filter(task => task.status === status);
    return tasksFiltered;
  }

  async findByDueAtPeriod(initialDate: Date, endDate: Date) {
    const tasks = await TaskModel.find();

    const tasksFiltered = tasks.filter(task => task.dueAt >= initialDate &&  task.dueAt <= endDate);
    return tasksFiltered;
  }

  async getCountByUserId(userId: string) {
    const tasks = await TaskModel.find();
    const tasksFiltered = tasks.filter(task => task.user.toString() === userId);
    return tasksFiltered.length
  }

  async getLastTaskByUserId(userId: string) {
    const tasks = await TaskModel.find();
    const tasksByUser = tasks.filter(task => task.user.toString() === userId);

    tasksByUser.sort((task1, task2) => {
      return new Date(task2.createdAt).getTime() - new Date(task1.createdAt).getTime()
    })
    return tasksByUser[0];
  }

  async getFirstTaskByUserId(userId: string) {
    const tasks = await TaskModel.find();
    const tasksByUser = tasks.filter(task => task.user.toString() === userId);

    tasksByUser.sort((task1, task2) => {
      return new Date(task1.createdAt).getTime() - new Date(task2.createdAt).getTime()
    })
    return tasksByUser[0];
  }

  async getTasksByAllCategories() {
    const tasks: Task[] = await TaskModel.find().populate('category');

    const tasksByCategories = tasks.reduce((group: any, task: any) => {
      const { category } = task;
      group[category] = group[category] ?? [];
      group[category].push(task)
      return group;
    }, {})

    return tasksByCategories;
  }

  async getTasksWithGreaterDescription() {
    const tasks: Task[] = await TaskModel.find();

    const taskWithGreaterDesc = tasks.reduce((taskWithGreaterDesc: any, taskActual: any) => {
      taskWithGreaterDesc.description.length > taskActual.description.length ? taskWithGreaterDesc : taskActual
    }, tasks[0])

    return taskWithGreaterDesc;
  }

  async averageDoneTasks() {
    const tasks: Task[] = await TaskModel.find();
    const doneTasks = tasks.filter(task => task.status === TaskStatus.DONE)

    return doneTasks.length / tasks.length * 100;
  }
}

export default new TaskService()