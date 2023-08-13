import { Model, Types } from "mongoose"

export type IProperty = {
    title: string,
    description: string,
    location: string,
    bedrooms: number,
    bathrooms: number,
    roomSize:  number,
    additionals: {
        propertySize: number
        attachedBath:  boolean,
        balconies:  number,
        generator: boolean,
        carParking: number,
        floorNo: string,
        floorType: string,
        wifiFacility: boolean
        liftFacility: boolean,
        securityGuard: boolean,
        gasFacility: boolean,
        CCTVFacility: boolean
    },
    images: string[],
    video: string,
    owner: Types.ObjectId
}


export type IPropertyModel = Model<IProperty, Record<string, unknown>>