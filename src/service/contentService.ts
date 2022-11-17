const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getDetailContent = async(userId:number) => {
    const data= await prisma.Content.findUnique({
        where: {
            id: userId
        }
    });
    return data;
}

const contentService = {
    getDetailContent
};

export default contentService;