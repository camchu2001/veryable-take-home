import { Router } from "express";

import {
  getOperatorController,
  createOperatorController,
} from "../controllers/";

export const router = Router();
router.get("/:operatorId", getOperatorController);
router.post("/", createOperatorController);
