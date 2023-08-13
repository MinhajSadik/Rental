import httpStatus from "http-status"
import { IProperty } from "../interfaces/property.interface"
import Property from "../models/property.model"
import { IGenericResponse } from "../utils/sendResponse"

class PropertyService {
    async addProperty (property: IProperty): Promise<IGenericResponse> {
        const newProperty = await Property.create(property)
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Property added successfully!",
            data: newProperty
        }
    }
    async getProperties (): Promise<IGenericResponse> {
        const properties = await Property.find({})
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Properties retrieved successfully!",
            data: properties
        }
    }
    async getProperty (id: string): Promise<IGenericResponse> {
        const property = await Property.findById(id)
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Property retrieved successfully!",
            data: property
        }
    }
    async deleteProperty (id: string): Promise<IGenericResponse> {
        const property = await Property.findByIdAndDelete(id)
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Property retrieved successfully!",
            data: property
        }
    }
    async updateProperty (id: string, updatedData: Partial<IProperty>):Promise<IGenericResponse> {
        const property = await Property.findByIdAndUpdate(id, {...updatedData}, {
            upsert: true,
            new: true
        })
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Property retrieved successfully!",
            data: property
        }
    }
}


export default new PropertyService()