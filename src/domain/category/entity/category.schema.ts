import { Schema, model } from 'mongoose'

const categorySchema = new Schema({
  name: { type: String, },
  cor: { type: String, },
}, { timestamps: true })

export default model('Category', categorySchema)