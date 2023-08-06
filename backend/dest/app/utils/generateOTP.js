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
const pin_model_1 = require("../models/pin.model");
const nodemailer_1 = __importDefault(require("nodemailer"));
const generatePin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const randomNumber = Math.floor(Math.random() * 10000);
        const pinCode = String(randomNumber).padStart(4, '0');
        const pinExpiry = Date.now() + 10 * 60 * 1000;
        const pinCodeObject = {
            pin: pinCode,
            expireAt: pinExpiry,
            userEmail: req.body.email
        };
        // save the pin code in Database
        const result = yield pin_model_1.Pin.create(pinCodeObject);
        if (result) {
            // send OTP to user email
            const transporter = nodemailer_1.default.createTransport({
                host: 'smtp.mailgun.org',
                port: 587,
                secure: false,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD,
                },
            });
            // Define the email details
            const mailOptions = {
                from: 'Md Rubel Ahmed Rana <mdrubelahmedrana521@gmail.com>',
                to: req.body.email,
                subject: 'Password Reset Pin Code',
                html: `
            <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Reset Password</title>
                </head>
                <body>
                    <h1>Your OTP: ${pinCode}</h1>
                </body>
                </html>
            `,
            };
            // Send the email
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return sendResponse_1.handleResponse.sendResponse(res, {
                        statusCode: http_status_1.default.OK,
                        success: true,
                        message: "PIN generated successfully",
                        data: result
                    });
                }
                return sendResponse_1.handleResponse.sendResponse(res, {
                    statusCode: http_status_1.default.OK,
                    success: true,
                    message: "OTP sent to your email. Please check your email",
                    data: result
                });
            });
        }
    }
    catch (error) {
        next(error);
    }
});
exports.default = generatePin;
