import { NextFunction, Request, Response } from "express";
import { UnauthorizedUser } from "../utils/api.error";
import jwt from "jsonwebtoken"
import envConfig from "../config/envConfig";

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    // const authHeaders = req.headers.authorization

    // if(!authHeaders ||  !authHeaders?.startsWith("Bearer ") || typeof authHeaders !== "string"){
    //     throw UnauthorizedUser("Authentication required")
    // }
    // const token :string = authHeaders?.split("Bearer ")[1] as string

    const token = req?.cookies?.token
    if (!token) {
        throw UnauthorizedUser("unauthorized user, no token")
    }
    try {
        const decoded = jwt.verify(token, envConfig.JWT_SECRET!) as {
            id: string;
        };
        req.userId = decoded?.id as string;
        next();

    } catch (error) {
        throw UnauthorizedUser("Invalid or expired token", error);
    }

}