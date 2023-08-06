import { NextFunction, Request, Response } from "express";
import { handleResponse } from "./sendResponse";
import httpStatus from "http-status";
import { Pin } from "../models/pin.model";
import nodemailer from "nodemailer"


const generatePin = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const randomNumber = Math.floor(Math.random() * 10000);
        const pinCode = String(randomNumber).padStart(4, '0');
        const pinExpiry = Date.now() + 10 * 60 * 1000;
        const pinCodeObject = {
        pin: pinCode,
        expireAt: pinExpiry,
        userEmail: req.body.email
    }
    // save the pin code in Database
    const result = await Pin.create(pinCodeObject)
    if(result){
        // send OTP to user email
        const transporter = nodemailer.createTransport({
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
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "PIN generated successfully",
                data: result
            })
        }
        return handleResponse.sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "OTP sent to your email. Please check your email",
            data: result
        })
        })
    }
    } catch (error) {
    next(error)
    }
}

export default generatePin