const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

//* 유저 전체 조회
const getAllUser = async () => {
  const data = await prisma.Content.findMany();
  // console.log((data[1]['startDate']).replace(/-/gi,'.'));
  const arr= JSON.parse(data[1]["price"])
  console.log(arr)
  var i;
  for (i=0; i<2;i++){
    console.log(arr[i]); 
  }
  return data;
};


const connectService = {
  getAllUser,
};

export default connectService;