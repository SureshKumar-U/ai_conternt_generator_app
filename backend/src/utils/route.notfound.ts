import { NextFunction, Request,Response } from "express";
import { notFound } from "./api.error";

export const routeNotFound = (req:Request, res:Response,next:NextFunction)=>{
    next(notFound("Invalid Endpoint was triggered"))
}