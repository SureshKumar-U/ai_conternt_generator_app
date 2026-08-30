import { Response,Request } from "express";
import AsyncHandler from "express-async-handler";
import { sendSuccess } from "../utils/api.response";
import { generateContent } from "../services/aiService";



export const generateContentHandler = AsyncHandler(async(req:Request,res:Response)=>{

 const data = await generateContent(req.body)
   
 sendSuccess(res,data,200,"content generated successfully")

  

})

