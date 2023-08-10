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
    getProperties = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result  = await PropertyService.getProperties()
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Properties retrieved successfully!",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
    getProperty = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string
            const result  = await PropertyService.getProperty(id)
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Property retrieved successfully!",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
    deleteProperty = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string
            const result  = await PropertyService.deleteProperty(id)
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Property deleted successfully!",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
    updateProperty = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id as string
            const updatedData = req.body
            const result  = await PropertyService.updateProperty(id, updatedData)
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Property updated successfully!",
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}

export default new PropertyController()