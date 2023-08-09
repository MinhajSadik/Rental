import { NextFunction, Request, Response } from "express";
import PropertyService from "../services/property.service";
import { IGenericResponse, handleResponse } from "../utils/sendResponse";
import httpStatus from "http-status";

class PropertyController {
    addProperty = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result  = await PropertyService.addProperty(req.body)
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Property added successfully!",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}


export default new PropertyController()