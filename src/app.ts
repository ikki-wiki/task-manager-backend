import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173", // local dev
  process.env.FRONTEND_URL?.trim() // production frontend
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (Postman, server-to-server)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`Blocked by CORS: ${origin}`);
      // Instead of throwing an Error, just reject
      callback(null, false);
    }
  }
}));

app.use(express.json());

app.use((req, res, next) => {
  console.log("Request origin:", req.headers.origin);
  next();
});

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
