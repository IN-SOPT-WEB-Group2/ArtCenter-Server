import { Router } from "express";
import { contentController } from "../controller";

const router: Router = Router();

router.get("/:contentId", contentController.getDetailContent);

router.get("/",contentController.getAllContent);
export default router;