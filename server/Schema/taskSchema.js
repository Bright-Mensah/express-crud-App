import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    date: { type: String, default: Date },
  },
  { collection: "task" }
);

export default mongoose.model("tasks", taskSchema);
