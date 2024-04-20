import { Schema, model } from 'mongoose'
import Category from '../../category/entity/category.schema';
import { TaskStatus } from './status.enum' 
import User from '../../user/entity/user.schema'

const taskSchema = new Schema({
  title: { type: String, },
  description: { type: String },
  concludedAt: { type: Date },
  category: { type:  Category },
  status: { type: TaskStatus },
  user: { type: User}
})

export default model('Task', taskSchema)