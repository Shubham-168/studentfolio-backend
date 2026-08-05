import  express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: 'true',
        message: 'Welcome to Student Folio Backend'
    });
});


export default app;