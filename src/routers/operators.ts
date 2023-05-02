import { Router } from "express";

import {
  getOperatorController,
  createOperatorController,
  getOperatorScheduleController,
} from "../controllers/";

export const router = Router();
router.get("/:operatorId", getOperatorController);
router.post("/", createOperatorController);
router.get("/:operatorId/schedules", getOperatorScheduleController);
