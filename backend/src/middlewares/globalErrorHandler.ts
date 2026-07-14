import envConfig from "../config/envConfig";
import { NextFunction, Request, Response } from "express"
import { ApiError } from "../utils/api.error";

const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {


    if (err instanceof ApiError) {
        const body: Record<string, unknown> = {
            success: false,
            message: err.message,
        }
        if (err.details) body.details = err.details

        return res.status(err.statusCode).json(body)
    }


    const body: Record<string, unknown> = {
        success: false,
        message: "Something went wrong",
    }

    if (envConfig.NODE_ENV === 'development') body.details = err.stack;
    res.status(500).json(body);


}


export default globalErrorHandler