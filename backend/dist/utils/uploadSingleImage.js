"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_1 = require("./sendResponse");
const http_status_1 = __importDefault(require("http-status"));
function uploadSingleImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const imageUrl = req.file.path;
        return sendResponse_1.handleResponse.sendResponse(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: "image uploaded successfully!",
            data: imageUrl
        });
    });
}
exports.default = uploadSingleImage;
