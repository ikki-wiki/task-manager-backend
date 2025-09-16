import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
const allowedOrigins = [
  "http://localhost:5173", // local dev
  "https://task-manager-frontend-psi-neon.vercel.app/" // your live site
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
}));

app.use(express.json());

// ✅ Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
