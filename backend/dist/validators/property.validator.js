"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyValidation = void 0;
const zod_1 = require("zod");
const createPropertyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required"
        }),
        price: zod_1.z.string({
            required_error: "Price is required"
        }),
        description: zod_1.z.string({
            required_error: "Description is required"
        }),
        location: zod_1.z.string({
            required_error: "Location is required"
        }),
        bedrooms: zod_1.z.string({
            required_error: "Bedrooms is required"
        }),
        bathrooms: zod_1.z.string({
            required_error: "Bathrooms is required"
        }),
        roomSize: zod_1.z.string({
            required_error: "Room Size is required"
        }),
        additionals: zod_1.z.object({
            propertySize: zod_1.z.string(),
            attachedBath: zod_1.z.string(),
            balconies: zod_1.z.string(),
            generator: zod_1.z.string(),
            carParking: zod_1.z.string(),
            floorNo: zod_1.z.string(),
            floorType: zod_1.z.string(),
            wifiFacility: zod_1.z.string(),
            liftFacility: zod_1.z.string(),
            securityGuard: zod_1.z.string(),
            gasFacility: zod_1.z.string(),
            CCTVFacility: zod_1.z.string(),
        }).optional(),
        images: zod_1.z.array(zod_1.z.string()),
        video: zod_1.z.string({
            required_error: "Video is required"
        }),
        owner: zod_1.z.string({
            required_error: "Owner is required"
        })
    })
});
const updatePropertyZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        price: zod_1.z.string().optional(),
        description: zod_1.z.string().optional(),
        location: zod_1.z.string().optional(),
        bedrooms: zod_1.z.string().optional(),
        bathrooms: zod_1.z.string().optional(),
        roomSize: zod_1.z.string().optional(),
        additionals: zod_1.z.object({
            propertySize: zod_1.z.string(),
            attachedBath: zod_1.z.string(),
            balconies: zod_1.z.string(),
            generator: zod_1.z.string(),
            carParking: zod_1.z.string(),
            floorNo: zod_1.z.string(),
            floorType: zod_1.z.string(),
            wifiFacility: zod_1.z.string(),
            liftFacility: zod_1.z.string(),
            securityGuard: zod_1.z.string(),
            gasFacility: zod_1.z.string(),
            CCTVFacility: zod_1.z.string(),
        }).optional(),
        images: zod_1.z.array(zod_1.z.string()).optional(),
        video: zod_1.z.string().optional(),
        owner: zod_1.z.string().optional()
    })
});
exports.PropertyValidation = {
    createPropertyZodSchema,
    updatePropertyZodSchema
};
