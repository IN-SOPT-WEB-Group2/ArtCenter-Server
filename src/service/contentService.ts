const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDetailContent = async(contentId:number) => {
    const data= await prisma.Content.findUnique({
        where: {
            id: contentId
        }
    });
    return data;
};

const contentService = {
    getDetailContent
};

export default contentService;