import { Request, Response, NextFunction } from 'express';
import { createParentSchema } from '../validators/parent.validator';
import * as parentService from '../services/parent.service';

export const createParent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const validatedData = createParentSchema.parse(req.body);
        const parent =  await parentService.createParent(validatedData);

        res.status(201).json({
            success: true,
            message: "Parent cerated successfully",
            data: parent,
        });
    } catch(error){
        next(error);
    }
}


