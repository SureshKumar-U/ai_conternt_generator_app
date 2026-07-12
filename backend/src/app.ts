import express, {type Application} from 'express';
const app : Application = express();
import connectDB from './config/dbConnect';
import globalErrorHandler from './middlewares/globalErrorHandler';

connectDB();

app.use(express.json());

app.use(globalErrorHandler)


export default app;