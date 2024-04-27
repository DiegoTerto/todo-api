import { Request, Response } from 'express'
import UserService from "../service/user.service"

class UserController {
  async create(req: Request, res: Response) {
    const user = await UserService.create(req.body)
    return res.status(201).send(user)
  }

  async findAll(req: Request, res: Response) {
    const users = await UserService.findAll()
    return res.status(200).send(users)
  }

  async findById(req: Request, res: Response) {
    const user = await UserService.findById(req.params.id)
    return res.status(200).send(user);
  }

  async update(req: Request, res: Response) {
    const userUpdated = await UserService.update(req.params.id, req.body)
    return res.status(200).send(userUpdated)
  }

  async delete(req: Request, res: Response) {
    await UserService.delete(req.params.id)
    return res.status(203)
  }
}

export default new UserController()