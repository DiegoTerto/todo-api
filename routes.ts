import { Router } from "express"
import categoryController from "./src/category/controller/category.controller"
import userController from './src/user/controller/user.controller'
import taskController from './src/task/controller/task.controller'

const routes = Router()

routes.get('/health-check')

// CATEGORY
routes.get("/categories", categoryController.findAll)
routes.post("/categories", categoryController.create)
routes.get('/categories/:id', categoryController.findById)
routes.delete('/categories/:id', categoryController.delete)
routes.put('/categories/:id', categoryController.update)

// USERS
routes.get('/users', userController.findAll)
routes.get('/users/:id', userController.findById)
routes.post('/users', userController.create)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)

// TASK
routes.get('/tasks', taskController.findAll)
routes.get('/tasks/:id', taskController.findById)
routes.post('/tasks', taskController.create)
routes.put('/tasks/:id', taskController.update)
routes.delete('/tasks/:id', taskController.delete)

// Rota para filtrar tarefas por categoria.
routes.get('/tasks/category/:categoryId', taskController.findByCategoryId)
// Rota para listar tarefas pendentes. ou Rota para listar tarefas concluídas.
routes.get('/tasks/status/:status', taskController.findByStatus)
// Rota para listar tarefas que vencem em um determinado período.
routes.get('/tasks/dueAt-period/:initialDate/:endDate', taskController.findByDueAtPeriod)
// Rota para agrupar tarefas por categoria.
routes.get('/tasks/all-categories', taskController.getTasksByAllCategories)
// Rota para encontrar a tarefa com a descrição mais longa.
routes.get('/tasks/greater-description', taskController.getTasksWithGreaterDescription)
// Rota para calcular a média de conclusão das tarefas.
routes.get('/tasks/done/average', taskController.averageDoneTasks)
// Rota para contar o número total de tarefas de um usuário.
routes.get('/tasks/user/:userId/count', taskController.getCountByUserId)
// Rota para encontrar a tarefa mais recente de um usuário.
routes.get('/tasks/user/:userId/first', taskController.getFirstTaskByUserId)
// Rota para encontrar a tarefa mais antiga de um usuário.
routes.get('/tasks/user/:userId/last', taskController.getLastTaskByUserId)

export { routes }