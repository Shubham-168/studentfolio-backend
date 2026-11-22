import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";

export const authorizeParentAccess = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        // The authentication middleware must run first.
        const authenticatedParentId = req.parentId;

        if (!authenticatedParentId) {
            throw new AppError("Authentication required", 401);
        }

        const requestedParentId = Number(req.params.id);

        if (
            !Number.isSafeInteger(requestedParentId) ||
            requestedParentId <= 0
        ) {
            throw new AppError("Invalid parent ID", 400);
        }

        // Check ownership.
        if (authenticatedParentId !== requestedParentId) {
            throw new AppError(
                "You are not authorized to acccess this resource",
                403
            );
        }

        next();

    }catch(error){
        next(error);
    }
};
