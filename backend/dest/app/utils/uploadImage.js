"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_1 = require("./sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const uploadImage = (req, res, next) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).send('No files uploaded.');
        }
        const imageUrls = req.files.map(file => file.path);
        return sendResponse_1.handleResponse.sendResponse(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "Image uploaded successfully",
            data: imageUrls
        });
    }
    catch (error) {
        next(error);
    }
};
exports.default = uploadImage;
