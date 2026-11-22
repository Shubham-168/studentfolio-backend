import { prisma } from "../config/database";

export const findChildByIdForParent = async (
    childId: number,
    parentId: number
) => {
    return prisma.child.findFirst({
        where: {
            id: childId,
            parentId,
        },
    });
};