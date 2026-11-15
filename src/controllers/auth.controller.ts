import {Request, Response, NextFunction} from 'express';
import { loginSchema } from '../validators/login.validator';
import * as authService from "../services/auth.service";
import { success } from 'zod';

export const loginParent = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try{
        const validatedData = loginSchema.parse(req.body);

        const result = await authService.loginParent(validatedData);

        res.status(200).json({
            success: true,
            message: "Login Successful",
            data: result
        });
    } catch (error) {
        next(error);
    }
}