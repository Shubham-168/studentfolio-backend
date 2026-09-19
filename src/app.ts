import  express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import router from "./routes";
import { notFound } from "./middlewares/notFound.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1", router);

app.use(notFound);
app.use(errorMiddleware);


export default app;