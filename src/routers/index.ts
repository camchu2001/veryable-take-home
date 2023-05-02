import { Router } from "express";
import { router as operatorRouter } from "./operators";
import { router as businessRouter } from "./businesses";

export const router = Router();
router.use("/operators", operatorRouter);
router.use("/businesses", businessRouter);
