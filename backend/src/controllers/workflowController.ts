import { Request, Response } from "express";
import Workflow from "../models/Workflow";

export const saveWorkflow = async (req: Request, res: Response) => {
  try {
    console.log("🔥 API HIT /api/workflows");
    console.log("📦 BODY:", req.body);

    const { name, nodes, edges } = req.body;

    if (!name || !nodes || !edges) {
      return res.status(400).json({ error: "Invalid payload" });
    }

    const workflow = new Workflow({ name, nodes, edges });
    await workflow.save();

    res.status(201).json({ message: "Workflow saved", workflow });
  } catch (error) {
    console.error("❌ SAVE ERROR:", error);
    res.status(500).json({ error: "Save failed" });
  }
};


export const getWorkflows = async (_: Request, res: Response) => {
  try {
    const workflows = await Workflow.find();
    res.json(workflows);
  } catch {
    res.status(500).json({ error: "Fetch failed" });
  }
};