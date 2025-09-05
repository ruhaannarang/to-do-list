import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  task: String,
  isDone: Boolean
});
export const todo = mongoose.model('todo', todoSchema);