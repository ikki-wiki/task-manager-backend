import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

// ✅ Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from Express + TypeScript!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
