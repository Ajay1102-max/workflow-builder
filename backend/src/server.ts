import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows frontend to connect (adjust origin in production)
app.use(express.json());

// Example API endpoint (for workflow data)
app.get('/api/workflows', (req, res) => {
  res.json({ message: 'Hello from backend!', workflows: [] });
});

app.post('/api/workflows', (req, res) => {
  const newWorkflow = req.body;
  // Save to DB or in-memory here later
  console.log('Received workflow:', newWorkflow);
  res.status(201).json({ success: true, data: newWorkflow });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
