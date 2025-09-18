import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.ts";
import { tasksRouter, settingsRouter, homeRouter} from "./routes/index.ts";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.use("/", homeRouter);
app.use("/tasks", tasksRouter);
app.use("/settings", settingsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
