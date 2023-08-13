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
exports.pinVerification = void 0;
const pin_model_1 = require("../models/pin.model");
const sendResponse_1 = require("../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
class VerifyOTPCode {
    verifyPin(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { pin, userEmail } = req.body;
                const isPinExist = yield pin_model_1.Pin.findOne({ userEmail });
                if (!isPinExist) {
                    return sendResponse_1.handleResponse.sendResponse(res, {
                        statusCode: http_status_1.default.NOT_FOUND,
                        success: false,
                        message: "Your pin code does not exist",
                        data: null
                    });
                }
                // check time expiration
                const currentTime = Date.now();
                if (currentTime > isPinExist.expireAt) {
                    return sendResponse_1.handleResponse.sendResponse(res, {
                        statusCode: http_status_1.default.BAD_REQUEST,
                        success: false,
                        message: "Time expired",
                        data: null
                    });
                }
                // match the pin
                if (isPinExist.pin !== pin) {
                    return sendResponse_1.handleResponse.sendResponse(res, {
                        statusCode: http_status_1.default.BAD_REQUEST,
                        success: false,
                        message: "Invalid pin code",
                        data: null
                    });
                }
                next();
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.pinVerification = new VerifyOTPCode();
