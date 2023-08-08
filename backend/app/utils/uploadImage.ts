import { NextFunction, Request, Response } from "express";
import { handleResponse } from "./sendResponse";
import httpStatus from "http-status";

// interface UploadedFile {
//     fieldname: string;
//     originalname: string;
//     encoding: string;
//     mimetype: string;
//     size: number;
//     destination: string;
//     filename: string;
//     path: string;
//   }
  
//   interface CustomRequest extends Request {
//     file: UploadedFile;
//   }

const uploadImage = (req: Request , res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const imageUrl = req.file.path as string;
        return handleResponse.sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Image uploaded successfully",
            data: imageUrl
        })
        // res.status(200).json({ imageUrl: imageUrl });
    } catch (error) {
        next(error)
    }
}

export default uploadImage