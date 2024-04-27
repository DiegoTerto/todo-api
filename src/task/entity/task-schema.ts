import mongoose, { Schema, model } from 'mongoose'

const taskSchema = new Schema({
  title: { type: String, },
  description: { type: String },
  concludedAt: { type: Date },
  type: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  status: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true })

export default model('Task', taskSchema)