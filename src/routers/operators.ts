import { Router } from "express";

import {
  getOperatorController,
  createOperatorController,
} from "../controllers/operators";

export const router = Router();
router.get("/:operatorId", getOperatorController);
router.post("/", createOperatorController);
