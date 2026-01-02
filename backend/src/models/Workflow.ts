import mongoose from "mongoose";

const workflowSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    nodes: { type: Array, required: true },
    edges: { type: Array, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Workflow", workflowSchema);
