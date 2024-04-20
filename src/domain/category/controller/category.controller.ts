import { Request, Response } from "express"
import CategoryService from "../service/category.service"

class CategoryController {
  async create(req: Request, res: Response) {
    const category = await CategoryService.create(req.body)
    return res.status(201).send(category)
  }

  async findAll(req: Request, res: Response) {
    const categories = await CategoryService.findAll()
    return res.status(200).send(categories)
  }

  async findById(req: Request, res: Response) {
    const category = await CategoryService.findById(req.params.id)
    return res.status(200).send(category);
  }
}

export default new CategoryController()