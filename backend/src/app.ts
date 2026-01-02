import express from "express";
import cors from "cors";
import workflowRoutes from "./routes/workflowRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/workflows", workflowRoutes);

export default app;
