import "express";

declare global {
    namespace Express {
        interface Request {
            parentId?: number;
        }
    }
}

export {};