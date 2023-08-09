import { NextFunction, Request, Response } from "express";
import { handleResponse } from "./sendResponse";
import httpStatus from "http-status";



const uploadImage = (req: Request , res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const imageUrl = req.file.path;
        return handleResponse.sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Image uploaded successfully",
            data: imageUrl
        })
    } catch (error) {
        next(error)
    }
}

export default uploadImage