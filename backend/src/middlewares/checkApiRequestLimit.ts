
import { NextFunction, Request,Response } from "express"
import User from "../models/User"
import { LimitExceededError, UnauthorizedUser } from "../utils/api.error"

export const checkApiRequestCount = async(req:Request,_res:Response,next:NextFunction)=>{
    const user = await User.findById(req.userId).select("apiRequestCount monthlyRequestCount")
    if(!user){
        throw UnauthorizedUser()
    }
    if(user?.apiRequestCount >= user?.monthlyRequestCount){
       throw LimitExceededError("Api Request Limit Reached")
    }
    next()

}