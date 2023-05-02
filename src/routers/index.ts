import { Router } from "express";
import { router as operatorRouter } from "./operators";
import { router as businessRouter } from "./businesses";
import { router as opRouter } from "./ops";

export const router = Router();
router.use("/operators", operatorRouter);
router.use("/businesses", businessRouter);
router.use("/ops/", opRouter);
