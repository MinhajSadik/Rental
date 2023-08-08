"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_1 = require("./sendResponse");
const http_status_1 = __importDefault(require("http-status"));
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
const uploadImage = (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const imageUrl = req.file.path;
        return sendResponse_1.handleResponse.sendResponse(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Image uploaded successfully",
            data: imageUrl
        });
        // res.status(200).json({ imageUrl: imageUrl });
    }
    catch (error) {
        next(error);
    }
};
exports.default = uploadImage;
