import { IProperty } from "../interfaces/property.interface"
import Property from "../models/property.model"

class PropertyService {
    addProperty = async (property: IProperty): Promise<IProperty | null> => {
        const newProperty = await Property.create(property)
        return newProperty
    }
}


export default new PropertyService()