import { Router } from "express";
import { saveWorkflow, getWorkflows } from "../controllers/workflowController";

const router = Router();

router.post("/save", saveWorkflow);
router.get("/", getWorkflows);

export default router;
