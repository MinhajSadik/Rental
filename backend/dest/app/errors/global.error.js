"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleZodError_1 = __importDefault(require("./handleZodError"));
const globalErrorHandler = (error, req, res, next) => {
    let statusCode = 500;
    let success = false;
    let message = "Something went wrong";
    let errorMessages = [] || error;
    // handle Zod user data validation 
    if (error.name === "ZodError") {
        const simplifiedErrors = (0, handleZodError_1.default)(error);
        errorMessages = simplifiedErrors;
    }
    return res.status(500).json({
        statusCode,
        success,
        message,
        errorMessages,
        stack: (error === null || error === void 0 ? void 0 : error.stack) || undefined
    });
};
exports.default = globalErrorHandler;
