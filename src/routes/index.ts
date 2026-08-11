import { Router } from "express";

const router = Router();

router.get('/health', (req, res) => {
    res.status(200).json({
        status: 'true',
        message: 'Server API is healthy'
    })
});

router.get('/about', (req, res) => {
    res.status(200).json({
        status: 'true',
        message: 'Welcome to Student Folio Backend Development',
        name: 'Shubham-Full Stack Developer'
    })
});

router.get('/version', (req, res) => {
    res.status(200).json({
        status: 'true',
        message: 'Server API version is 1.0.0'
    })
});

export default router;