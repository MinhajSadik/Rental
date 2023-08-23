"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const propertySchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
});
const Property = (0, mongoose_1.model)("Property", propertySchema);
exports.default = Property;
