import { Router } from "express";
import tasksRouter from "./tasks.ts";
import settingsRouter from "./settings.ts";
import homeRouter from "./home.ts";

const router = Router();

router.use("/tasks", tasksRouter);
router.use("/settings", settingsRouter);
router.use("/", homeRouter);

export { tasksRouter, settingsRouter, homeRouter };

