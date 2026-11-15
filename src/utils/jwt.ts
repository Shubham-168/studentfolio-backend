
import jwt, { SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

interface AccessTokenPayload {
    parentId: number;
}

export const generateAccessToken = (
    payload: AccessTokenPayload
): string => {
    return jwt.sign(
        { sub: String(payload.parentId) },
        env.JWT_SECRET,
        {
            expiresIn: env.JWT_EXPIRES_IN as SignOptions["expiresIn"],
        }
    );
};
