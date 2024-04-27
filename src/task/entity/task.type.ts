import { TaskStatus } from "./status.enum"

export type PersistTaskType = {
  title: string
  description: string
  concludedAt: Date
  type: string
  category: string
  status: TaskStatus
  user: string
}