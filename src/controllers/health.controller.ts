import {Request, Response} from "express";

export const healthCheck = (req: Request, res: Response): void => {
    res.status(200).json({
        success: true,
        message: 'API is healthy',
    });
};

export const about = (req: Request, res: Response): void => {
    res.status(200).json({
        name: 'Student Folio API',
        author: "Shubham",
        status: "Running",
    })
}

export const version = (req: Request, res: Response): void => {
    res.status(200).json({
        version: '1.0.0',
    })
}