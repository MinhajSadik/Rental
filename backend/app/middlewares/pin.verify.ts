import { NextFunction, Request, Response } from "express";
import { Pin } from "../models/pin.model";
import { handleResponse } from "../utils/sendResponse";
import httpStatus from "http-status";

class VerifyOTPCode {
    async verifyPin (req: Request, res: Response, next: NextFunction) {
        try {
         const {pin, userEmail} = req.body;
         const isPinExist = await Pin.findOne({userEmail});
         if(!isPinExist){
             return handleResponse.sendResponse(res, {
                 statusCode: httpStatus.NOT_FOUND,
                 success: false,
                 message: "Your pin code does not exist",
                 data: null
             })
         }
         // check time expiration
         const currentTime: any = Date.now()
        if (currentTime > isPinExist.expireAt) {
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.BAD_REQUEST,
                success: false,
                message: "Time expired",
                data: null
            })
        }
         // match the pin
         if(isPinExist.pin !== pin){
             return handleResponse.sendResponse(res, {
                 statusCode: httpStatus.BAD_REQUEST,
                 success: false,
                 message: "Invalid pin code",
                 data: null
             })
         }
         next()
        } catch (error) {
         next(error)
        }
     }
}

export const pinVerification =  new VerifyOTPCode()