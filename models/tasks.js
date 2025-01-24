import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String }, // URL or file path for the task image
  assignedTo: { type: String }, // Name of the assignee, if applicable
  assignedBy: { type: String }, // Name of the person who assigned the task
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    default: "To Do",
  }, // Tracks where the task is
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Task", taskSchema);
