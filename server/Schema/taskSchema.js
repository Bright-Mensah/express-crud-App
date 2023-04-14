import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: { type: String },
    date: { type: String, default: Date },
    // taskId: { type: String },
  },
  { collection: "tasks" }
);

export default mongoose.model("tasks", taskSchema);
