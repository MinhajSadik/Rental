import { NextFunction, Request, Response } from "express";
import handleZodError from "./handleZodError";
import { IGenericError } from "../interfaces/error.interface";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let success = false;
    let message = "Something went wrong";
    let errorMessages: IGenericError[] = [] || error

    // handle Zod user data validation 
    if(error.name === "ZodError"){
        const simplifiedErrors =  handleZodError(error);
        errorMessages = simplifiedErrors 
    }

    return res.status(500).json({
        statusCode,
        success,
        message,
        errorMessages,
        stack: error?.stack || undefined
    })
}

export default globalErrorHandler