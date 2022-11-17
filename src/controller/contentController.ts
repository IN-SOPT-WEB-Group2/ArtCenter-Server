import { Request, Response } from "express";
import { contentService } from "../service";

const getDetailContent = async (req: Request, res: Response) => {
    const {contentId}=req.params;
    const data = await contentService.getDetailContent(+contentId);
    if(!data)
        return res.status(404).json({status:404, message:"상세 컨텐츠 가져오기 실패"});
    return res.status(200).json({ status: 200, message: "상세 컨텐츠 가져오기 성공", data });
};


const contentController = {
    getDetailContent,
};

export default contentController;