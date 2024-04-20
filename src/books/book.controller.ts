import { Request, Response } from "express"
import { BookService } from "./book.service"

class BookController {
  async create(req: Request, response: Response) {
    const book = await new BookService().create(req.body)
    return response.status(201).json(book)
  }

  async findById(req: Request, response: Response) {
    const book = await new BookService().findById(req.params.id)
    return response.json(book)
  }

  async update(req: Request, response: Response) {
    const bookUpdated = await new BookService().update(req.params.id, req.body)
    return response.json(bookUpdated)
  }

  async delete(req: Request, response: Response) {
    await new BookService().delete(req.params.id)
    return response.status(204).end();
  }

  async findAll(req: Request, response: Response) {
    const books = await new BookService().findAll()
    return response.json(books)
  }
}

export default new BookController()