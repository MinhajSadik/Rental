import { NextFunction, Request, Response } from "express";
import { handleResponse } from "./sendResponse";
import httpStatus from "http-status";


const uploadImage = (req: Request , res: Response, next: NextFunction) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send('No files uploaded.');
          }
        const imageUrls = req.files.map(file => file.path);
        return handleResponse.sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Images uploaded successfully",
            data: imageUrls
        })
    } catch (error) {
        next(error)
    }
}

export default uploadImage