import { Router } from "express";
import connectRouter from "./connectRouter";

const router : Router = Router();

router.use("/connect",connectRouter);
export default router;
