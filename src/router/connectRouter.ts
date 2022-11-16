import { Router } from "express";
import { connectController } from "../controller";

const router: Router = Router();


//* 전체 유저 조회 ( GET api/user )
router.get("/", connectController.getAllUser);


export default router;
