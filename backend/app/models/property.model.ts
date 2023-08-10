import { Schema, model } from "mongoose";
import { IProperty, IPropertyModel } from "../interfaces/property.interface";

const propertySchema = new Schema<IProperty>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    bathrooms: {
        type: Number,
        required: true
    },
    roomSize: {
        type: Number,
        required: true
    },
    additionals: {
        propertySize: {
            type: Number
        },
        attachedBath: {
            type: Boolean
        },
        balconies: {
            type: Number
        },
        generator: {
            type: Boolean
        },
        carParking: {
            type: Number
        },
        floorNo: {
            type: String
        },
        floorType: {
            type: String
        },
        wifiFacility: {
            type: Boolean
        },
        liftFacility: {
            type: Boolean
        },
        securityGuard: {
            type: Boolean
        },
        gasFacility: {
            type: Boolean
        },
        CCTVFacility: {
            type: Boolean
        }
    },
    images: [String],
    video: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
})

const Property = model<IProperty, IPropertyModel>("Property", propertySchema)


export default Property