const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDetailContent = async(contentId:number) => {
    const data= await prisma.Content.findUnique({
        where: {
            id: contentId
        }
    });
    data.startDate=data.startDate.replace(/-/gi,".");
    data.endDate=data.endDate.replace(/-/gi, ".");
    return data;
};

const getAllContent = async() => {
    const data = await prisma.Content.findMany();
    console.log(data);
    return data;
}

const contentService = {
    getDetailContent,
    getAllContent
};

export default contentService;