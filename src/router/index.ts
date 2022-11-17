import { Router } from "express";
import contentRouter from "./contentRouter";

const router : Router = Router();

router.use("/content",contentRouter);
router.use("/",contentRouter);
export default router;
