const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const parseDate=async(ddate: String)=>{
    const date=ddate.replace(/-/gi,".");
    return date;
}

//메인 페이지 전체 일정 보기 
const allContent = async() => {
    const data = await prisma.Content.findMany();
    for (let i = 0; i<data.length; i++){
        data[i].startDate = await parseDate(data[i].startDate);
        data[i].endDate=await parseDate(data[i].endDate);
    }
    return data;
}

//켈린더 페이지 전체 일정 보기 
const getAllContent = async() => {
    const data = await prisma.Content.findMany();
    console.log(data);
    return data;
}

//상세 컨텐츠 보기 
const getDetailContent = async(contentId:number) => {
    const data= await prisma.Content.findUnique({
        where: {
            id: contentId
        }
    });
    data.startDate=await parseDate(data.startDate);
    return data;
};


const contentService = {
    allContent,
    getAllContent,
    getDetailContent
};

export default contentService;