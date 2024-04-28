import { TaskStatus } from "./status.enum"
import { Category } from "../../category/entity/category.type"
import { User } from "../../user/entity/user.type"

export type Task = {
  title: string
  description?: string
  concludedAt?: Date
  type?: string
  category?: Category
  status: TaskStatus
  user: User
}