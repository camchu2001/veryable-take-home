import { Router } from "express";

import { createOpController, getOpController } from "../controllers/";

export const router = Router();
router.get("/:opId", getOpController);
router.post("/", createOpController);
