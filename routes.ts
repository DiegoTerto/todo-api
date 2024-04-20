import { Router } from "express"
import bookController from "./src/books/book.controller"
import categoryController from "./src/domain/category/controller/category.controller"

const routes = Router()

routes.get('/health-check')

routes.post('/books', bookController.create)

routes.get('/test-api/external', bookController.findById)

routes.put('/books/:id', bookController.update)

routes.delete('/books/:id', bookController.delete)

routes.get('/books', bookController.findAll)

routes.get("/categories", categoryController.findAll)

routes.post("/categories", categoryController.findAll)

export { routes }