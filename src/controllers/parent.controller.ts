import { Request, Response, NextFunction } from 'express';
import { createParentSchema } from '../validators/parent.validator';
import * as parentService from '../services/parent.service';
import { success } from 'zod';
import { AppError } from '../utils/AppError';

export const createParent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const validatedData = createParentSchema.parse(req.body);
        const parent = await parentService.createParent(validatedData);

        res.status(201).json({
            success: true,
            message: "Parent cerated successfully",
            data: parent,
        });
    } catch (error) {
        next(error);
    }
}

export const getAllParents = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;

        if (page < 1 || limit < 1) {
            throw new AppError(
                "Page and limit must be positive numbers",
                400
            );
        }

        if (limit > 100) {
            throw new AppError(
                "Limit cannot be greater than 100",
                400
            );
        }

        const parents = await parentService.getAllParents(
            page,
            limit
        );

        res.status(200).json({
            success: 'true',
            message: 'Parents fetched successfully',
            data: parents
        })

    } catch (error) {
        next(error)
    }
}

export const getParentById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const id = Number(req.params.id);

        if (Number.isNaN(id)) {
            throw new AppError("Invalid parent ID", 400);
        }

        const parent = await parentService.getParentById(id);

        res.status(200).json({
            success: true,
            message: 'Parent fetched successfully',
            data: parent,
        })
    } catch (error) {
        next(error);
    }
};
