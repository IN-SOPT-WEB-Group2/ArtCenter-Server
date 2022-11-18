const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

interface date{
    year:string,
    month:string,
    day:string
}

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
    console.log("메인페이지 라우터 ")
    return data;
}

//켈린더 페이지 전체 일정 보기 
const getAllContent = async() => {
    const data = await prisma.Content.findMany();
    for(let i=0; i<data.length;i++){
        const startDaylist = data[i].startDate.split('-')
        const endDaylist = data[i].startDate.split('-')
        const StartDateObject:date = {year :startDaylist[0], month:startDaylist[1],day:startDaylist[2]}
        const EndDateObject:date = {year :endDaylist[0], month:endDaylist[1],day:endDaylist[2]}
        data[i].StartDate=StartDateObject;
        data[i].EndDate=EndDateObject;
        }
    // console.log("전체일정 라우터 ")
    console.log(data[1]);
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