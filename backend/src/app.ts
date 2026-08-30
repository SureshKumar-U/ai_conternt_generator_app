import express, {Request, Response, type Application} from 'express';
const app : Application = express();
import connectDB from './config/dbConnect';
import globalErrorHandler from './middlewares/globalErrorHandler';
import authRoutes from "./routes/authRoutes"
import { routeNotFound } from './utils/route.notfound';
import cookieParser from "cookie-parser"
import aiRouter from './routes/aiRoutes';
connectDB();

app.use(express.json());//parse the incoming json automatically
app.use(cookieParser()); // parse the cookie
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/content",aiRouter)
app.get("/api/v1/health",(_req:Request,res:Response)=>{
    res.status(200).json({
        message:"service is up"
    })
})
app.use(routeNotFound);
app.use(globalErrorHandler)


export default app;