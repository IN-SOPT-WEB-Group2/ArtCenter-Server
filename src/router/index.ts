import { Router } from "express";
import connectRouter from "./connectRouter";
import contentRouter from "./contentRouter";

const router : Router = Router();

router.use("/connect",connectRouter);
router.use("/content",contentRouter);
export default router;
