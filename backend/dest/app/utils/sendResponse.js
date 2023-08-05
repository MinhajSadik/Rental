"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleResponse = void 0;
class ResponseHandler {
    sendResponse(res, data) {
        return res.status(data.statusCode).json({
            statusCode: data.statusCode,
            success: data.success,
            message: data.message,
            data: data.data,
        });
    }
}
exports.handleResponse = new ResponseHandler();
