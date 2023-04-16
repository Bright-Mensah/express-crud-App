import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: { type: String },
    createdAt: { type: String, default: Date },
    // updatedAt: { type: String, default: Date },
  },
  { collection: "tasks" }
);

export default mongoose.model("tasks", taskSchema);
