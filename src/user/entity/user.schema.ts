import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  name: String,
  peso: Number,
  email: String,
  password: String,
})

export default model('User', userSchema, 'user')