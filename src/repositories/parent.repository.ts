import { email } from "zod";
import { prisma } from "../config/database";

export const findParentByEmail = async (email: string) => {
    return prisma.parent.findUnique({
        where: {
            email,
        }
    })
};

export const createParent = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    avatar?: string;
}) => {
    return prisma.parent.create({
        data,
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            avatar: true,
            createdAt: true,
            updatedAt: true,
        },
    });
};