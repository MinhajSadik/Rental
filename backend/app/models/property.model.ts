import { Schema, model } from "mongoose";
import { IProperty, IPropertyModel } from "../interfaces/property.interface";

const propertySchema = new Schema<IProperty>({
    title: {
        type: String,
        required: true
    },
    price: {
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
        type: String,
        required: true
    },
    bathrooms: {
        type: String,
        required: true
    },
    roomSize: {
        type: String,
        required: true
    },
    additionals: {
        propertySize: {
            type: String
        },
        attachedBath: {
            type: String
        },
        balconies: {
            type: String
        },
        generator: {
            type: String
        },
        carParking: {
            type: String
        },
        floorNo: {
            type: String
        },
        floorType: {
            type: String
        },
        wifiFacility: {
            type: String
        },
        liftFacility: {
            type: String
        },
        securityGuard: {
            type: String
        },
        gasFacility: {
            type: String
        },
        CCTVFacility: {
            type: String
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
}, {
    timestamps: true
})

const Property = model<IProperty, IPropertyModel>("Property", propertySchema)


export default Property