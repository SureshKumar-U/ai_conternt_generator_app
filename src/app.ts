import express, {type Application} from 'express';
const app : Application = express();
import connectDB from './config/dbConnect';

connectDB();

app.use(express.json());


export default app;