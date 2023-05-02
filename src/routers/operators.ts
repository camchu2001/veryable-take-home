import { Router } from "express";

import {
  getOperatorController,
  createOperatorController,
  getOperatorSchedulesController,
} from "../controllers/";

export const router = Router();
router.get("/:operatorId", getOperatorController);
router.post("/", createOperatorController);
router.get("/:operatorId/schedules", getOperatorSchedulesController);
