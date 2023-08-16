import { Model, Types } from "mongoose"

export type IProperty = {
    title: string,
    price: string,
    description: string,
    location: string,
    bedrooms: string,
    bathrooms: string,
    roomSize:  string,
    additionals: {
        propertySize: string
        attachedBath:  string,
        balconies:  string,
        generator: string,
        carParking: string,
        floorNo: string,
        floorType: string,
        wifiFacility: string
        liftFacility: string,
        securityGuard: string,
        gasFacility: string,
        CCTVFacility: string
    },
    images: string[],
    video: string,
    owner: Types.ObjectId
}


export type IPropertyModel = Model<IProperty, Record<string, unknown>>