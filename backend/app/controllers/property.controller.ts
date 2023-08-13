import { NextFunction, Request, Response } from "express";
import PropertyService from "../services/property.service";
import { handleResponse } from "../utils/sendResponse";

class PropertyController {
    async addProperty (req: Request, res: Response, next: NextFunction) {
        try {
            const result  = await PropertyService.addProperty(req.body)
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }
    }
    async getProperties (req: Request, res: Response, next: NextFunction) {
        try {
            const result  = await PropertyService.getProperties()
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }
    }
    async getProperty (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id as string
            const result  = await PropertyService.getProperty(id)
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }
    }
    async deleteProperty (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id as string
            const result  = await PropertyService.deleteProperty(id)
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }
    }
    async updateProperty (req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id as string
            const updatedData = req.body
            const result  = await PropertyService.updateProperty(id, updatedData)
            return handleResponse.sendResponse(res,  result)
        } catch (error) {
            next(error)
        }
    }
}

export default new PropertyController()