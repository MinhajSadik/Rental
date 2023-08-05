import { NextFunction, Request, Response } from "express";
import handleZodError from "./handleZodError";
import { IGenericError } from "../interfaces/error.interface";

class GlobalErrorHandler {
    handle(error: any, req: Request, res: Response, next: NextFunction): void {
        let statusCode = 500;
        let success = false;
        let message = "Something went wrong";
        let errorMessages: IGenericError[] = [] || error;

        // Handle Zod user data validation 
        if (error.name === "ZodError") {
            const simplifiedErrors = handleZodError(error);
            errorMessages = simplifiedErrors;
        }

        res.status(500).json({
            statusCode,
            success,
            message,
            errorMessages,
            stack: error?.stack || undefined,
        });
    }
}

const globalErrorHandler = new GlobalErrorHandler();

export default globalErrorHandler;
