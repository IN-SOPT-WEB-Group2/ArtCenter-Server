import { Router } from "express";
import { contentController } from "../controller";

const router: Router = Router();

router.get("/:contentId", contentController.getDetailContent);

export default router;