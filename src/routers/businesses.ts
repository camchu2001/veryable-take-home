import { Router } from "express";

import {
  createBusinessController,
  getBusinessController,
} from "../controllers/";

export const router = Router();
router.get("/:businessId", getBusinessController);
router.post("/", createBusinessController);
