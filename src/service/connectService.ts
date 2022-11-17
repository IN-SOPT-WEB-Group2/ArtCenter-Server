const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.Content.findMany();
  console.log((data[1]['startDate']).replace(/-/gi,'.'));
  return data;
};

const connectService = {
  getAllUser,
};

export default connectService;