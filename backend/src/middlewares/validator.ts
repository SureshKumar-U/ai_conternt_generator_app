import { Request, Response, NextFunction } from "express";
import * as z from "zod";
import { BadRequest } from "../utils/api.error";


export const validateBody =
  (schema: z.ZodSchema<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    console.log(result.error?.issues)

    if (!result.success) {
        throw BadRequest("validation failed", result.error.issues)
    }

    req.body = result.data;
    next();
  };



  export const validateQuery = (schema: z.ZodSchema) =>
    (req: Request, _res: Response, next: NextFunction) => {
        const result = schema.safeParse(req.query);

        if (!result.success) {
            throw BadRequest('Validation failed', result.error.issues);
        }

        req.query = result.data as Request['query'];
        next();
    };