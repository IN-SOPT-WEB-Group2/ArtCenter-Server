import { Request, Response } from "express";
import { connectService } from "../service";

//* 유저 생성


const getAllUser = async (req: Request, res: Response) => {
  const data = await connectService.getAllUser();
  return res.status(200).json({ status: 200, message: "유저 전체 조회 성공", data });
};


const connectController = {
  getAllUser,
};

export default connectController;