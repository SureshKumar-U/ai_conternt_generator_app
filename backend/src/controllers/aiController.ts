import { Response,Request } from "express";
import AsyncHandler from "express-async-handler";
import { sendSuccess } from "../utils/api.response";
import { generateContent, saveContentHistory } from "../services/aiService";

export const generateContentHandler = AsyncHandler(async(req:Request,res:Response)=>{
 const data:string = await generateContent(req.body)
 await saveContentHistory(req.userId,data)
 sendSuccess(res,data,200,"content generated successfully")
})



