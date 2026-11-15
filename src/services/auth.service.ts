import * as parentRepository from "../repositories/parent.repository";
import { comparePassword } from "../utils/password";
import { generateAccessToken } from "../utils/jwt";
import { AppError } from "../utils/AppError";

export const loginParent = async (data: {
    email: string;
    password: string;
}) => {
    const parent = await parentRepository.findActiveParentByEmail(data.email);

    if (!parent) {
        throw new AppError("Invalid email or password", 401);
    }

    const isPasswordValid = await comparePassword(data.password, parent.password);
    console.log('checing password validation');
    if (!isPasswordValid) {
        throw new AppError("Invalid email or password", 401)
    }

    const accessToken = generateAccessToken({
        parentId: parent.id,
    });

    const {password, ...safeParent} = parent;

    return {
        parent: safeParent,
        accessToken,
    }
}