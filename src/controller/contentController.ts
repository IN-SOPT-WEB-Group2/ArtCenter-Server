import { Request, Response } from "express";
import { contentService } from "../service";

//메인 페이지 전체 일정 가져오기 
const allContent  = async (req:Request, res:Response)=>{
    const data = await contentService.allContent();
    if(!data)
        return res.status(404).json({status:404, message:"메인 페이지 전체 일정 가져오기  실패"});
    return res.status(200).json({ status: 200, message: "메인 페이지 전체 일정 가져오기  성공", data });
};

//캘린더 페이지 전체 일정 가져오기 
const getAllContent = async (req:Request, res:Response)=>{
    const data = await contentService.getAllContent();
    if(!data)
        return res.status(404).json({status:404, message:"캘린더 페이지 전체 일정 가져오기  실패"});
    return res.status(200).json({ status: 200, message: "캘린더 페이지 전체 일정 가져오기  성공", data });
};

//캘린더 페이지 해당 날짜 일정 가져오기
const getDayContent = async(req:Request, res:Response)=>{
    const selectedDate: string =req.query.date as string;
    //console.log("선택한 날짜: "+selectedDate);
    const data= await contentService.getDayContent(selectedDate);
    
    return res.status(200).json({ status: 200, message: "캘린더 페이지 해당 일정 가져오기  성공", data });
};

//상세 컨텐츠 가져오기 
const getDetailContent = async (req: Request, res: Response) => {
    const {contentId}=req.params;
    const data = await contentService.getDetailContent(+contentId);
    if(!data)
        return res.status(404).json({status:404, message:"상세 컨텐츠 가져오기 실패"});
    return res.status(200).json({ status: 200, message: "상세 컨텐츠 가져오기 성공", data });
};




const contentController = {
    allContent,
    getAllContent,
    getDayContent,
    getDetailContent
};

export default contentController;