const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.Content.findMany();
  return data;
};

const connectService = {
  getAllUser,
};

export default connectService;