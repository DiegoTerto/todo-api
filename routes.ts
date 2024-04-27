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

export { routes }