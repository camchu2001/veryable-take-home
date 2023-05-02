import { Router } from "express";
import { router as operatorRouter } from "./operator";

export const router = Router();
router.use("/operators", operatorRouter);
