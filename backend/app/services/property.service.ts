import { IProperty } from "../interfaces/property.interface"
import Property from "../models/property.model"

class PropertyService {
    addProperty = async (property: IProperty): Promise<IProperty | null> => {
        const newProperty = await Property.create(property)
        return newProperty
    }
    getProperties = async (): Promise<IProperty[]> => {
        const newProperty = await Property.find({})
        return newProperty
    }
    getProperty = async (id: string): Promise<IProperty | null> => {
        const newProperty = await Property.findById(id)
        return newProperty
    }
    deleteProperty = async (id: string): Promise<IProperty | null> => {
        const newProperty = await Property.findByIdAndDelete(id)
        return newProperty
    }
    updateProperty = async (id: string, updatedData: Partial<IProperty>): Promise<IProperty | null> => {
        const newProperty = await Property.findByIdAndUpdate(id, {...updatedData}, {
            upsert: true,
            new: true
        })
        return newProperty
    }
}


export default new PropertyService()