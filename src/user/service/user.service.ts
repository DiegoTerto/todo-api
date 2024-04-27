import { User } from "../entity/user.type"
import UserModel from '../entity/user.schema'

class UserService {
  async create(data: User) {
    const createdUser = await UserModel.create(data)
    return createdUser
  }

  async findAll() {
    const allUsers = await UserModel.find()
    return allUsers
  }

  async findById(id: string) {
    const user = await UserModel.findById(id)
    return user
  }

  async update(id: string, data: User) {
    const userUpdated = await UserModel.findByIdAndUpdate(id, data, { new: true })
    return userUpdated
  }

  async delete(id: string) {
    await UserModel.findByIdAndDelete(id)
  }
}

export default new UserService()