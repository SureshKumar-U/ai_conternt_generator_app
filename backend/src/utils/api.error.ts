export class ApiError extends Error {
    readonly statusCode: number;
    readonly details:unknown;
    constructor(message: string, statusCode = 500,details?: unknown) {
        super(message);
        this.name = this.constructor.name;
        this.details = details;
        this.statusCode = statusCode;
        Error.captureStackTrace?.(this, this.constructor);
    }
}

export const BadRequest = (message:string,details?:unknown)=> new ApiError(message, 400, details)
export const UnauthorizedUser = (message:string = "Unauthorized user",details?:unknown)=>new ApiError(message, 401,details)
export const forbidden = (message: string, details?: unknown) => new ApiError(message,403, details);
export const conflict = (message: string, details?: unknown) => new ApiError(message,409, details);
export const notFound = (message: string, details?: unknown) => new ApiError(message,404, details);

export const LimitExceededError  =  (message: string, details?: unknown) => new ApiError(message,429, details);
