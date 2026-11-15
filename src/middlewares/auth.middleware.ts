
import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

import { env } from "../config/env";
import { AppError } from "../utils/AppError";

export const authenticateParent = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        // Step 1: Get Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new AppError("Authentication token required", 401);
        }

        // Step 2: Extract token
        const token = authHeader.split(" ")[1];

        if (!token) {
            throw new AppError("Invalid authentication token", 401);
        }

        // Step 3: Verify token
        const decoded = jwt.verify(token, env.JWT_SECRET);

        // Step 4: Validate decoded payload
        if (
            typeof decoded === "string" ||
            typeof decoded.sub !== "string"
        ) {
            throw new AppError("Invalid authentication token", 401);
        }

        // Step 5: Extract parent ID
        const parentId = Number(decoded.sub);

        if (!Number.isSafeInteger(parentId) || parentId <= 0) {
            throw new AppError("Invalid authentication token", 401);
        }

        // Step 6: Attach parent ID to request
        req.parentId = parentId;

        // Step 7: Continue to next middleware/controller
        next();

    } catch (error) {
        if (
            error instanceof jwt.JsonWebTokenError ||
            error instanceof jwt.TokenExpiredError
        ) {
            return next(
                new AppError("Invalid or expired authentication token", 401)
            );
        }

        next(error);
    }
};
