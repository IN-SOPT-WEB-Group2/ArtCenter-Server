import { Router } from "express";
import { contentController } from "../controller";

const router: Router = Router();

//메인 페이지 전체 일정 보기 
router.get("/main",contentController.allContent);

//캘린더 페이지 전체 일정 보기 
router.get("/content",contentController.getAllContent);
router.get("/date",contentController.getDayContent);

//컨텐츠 일정 상세
router.get("/:contentId", contentController.getDetailContent);

export default router;