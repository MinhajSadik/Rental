"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const propertySchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
});
const Property = (0, mongoose_1.model)("Property", propertySchema);
exports.default = Property;
