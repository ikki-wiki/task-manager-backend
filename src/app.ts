import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Make sure env variables are loaded

const app = express();
const PORT = process.env.PORT || 5000;

// Trim the frontend URL to remove any trailing whitespace
const allowedOrigins = [
  "http://localhost:5173", // local dev
  process.env.FRONTEND_URL?.trim() // production frontend
];

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (like Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error(`CORS blocked: ${origin}`));
    }
  }
}));

app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
