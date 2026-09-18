import app from "./app";
import { prisma } from "./config/database";
import { env } from './config/env';

const PORT = env.port;


const startServer = async () => {
    try {
        await prisma.$connect();

        console.log('Database connected successfully');

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT} in ${env.nodeEnv} mode`);
        });
    } catch(err){
        console.error('Database connection failed', err);
        process.exit(1);
    }
}

startServer();

