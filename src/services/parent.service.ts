import bcrypt from "bcrypt";
import * as parentRepository from '../repositories/parent.repository';
import { AppError } from "../utils/AppError";

export const createParent = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phone?: string;
    avatar?: string;
}) => {
    const existingParent = await parentRepository.findParentByEmail(data.email);

    if (existingParent) {
        throw new AppError(
            "Parent with this email already exists",
            409
        );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    return parentRepository.createParent({
        ...data,
        password: hashedPassword,
    });
};


export const getAllParents = async (
    page: number,
    limit: number
) => {

    const skip = (page - 1) * limit;

    const {parents, total} = await parentRepository.findAllParents(skip, limit);

    const totalPages = Math.ceil(total / limit);

    return {
        parents,
        pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNextPage: page < totalPages,
            hasPreviousPage: page > 1,
        },
    };
}

export const getParentById = async (id: number) => {
    const parent = await parentRepository.findParentById(id);

    if (!parent) {
        throw new AppError("Parent not found", 404);
    }

    return parent;
}