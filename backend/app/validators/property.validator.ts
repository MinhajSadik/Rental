import { z } from "zod";

const createPropertyZodSchema = z.object({
    body: z.object({
        title: z.string({
          required_error: "Title is required"
        }),
        description: z.string({
          required_error: "Description is required"
        }),
        location: z.string({
          required_error: "Location is required"
        }),
        bedrooms: z.number({
          required_error: "Bedrooms is required"
        }),
        bathrooms: z.number({
          required_error: "Bathrooms is required"
        }),
        roomSize: z.number({
          required_error: "Room Size is required"
        }),
        additionals: z.object({
        propertySize: z.number(),
        attachedBath: z.boolean(),
        balconies: z.number(),
        generator: z.boolean(),
        carParking: z.number(),
        floorNo: z.string(),
        floorType: z.string(),
        wifiFacility: z.boolean(),
        liftFacility: z.boolean(),
        securityGuard: z.boolean(),
        gasFacility: z.boolean(),
        CCTVFacility: z.boolean(),
        }).optional(),
        images: z.array(
            z.string()
        ),
        video: z.string({
            required_error: "Video is required"
        }),
        owner: z.string({
            required_error: "Owner is required"
        })
    })
});

const updatePropertyZodSchema = z.object({
    body: z.object({
        title: z.string({
          required_error: "Title is required"
        }).optional(),
        description: z.string().optional(),
        location: z.string().optional(),
        bedrooms: z.number().optional(),
        bathrooms: z.number().optional(),
        roomSize: z.number().optional(),
        additionals: z.object({
        propertySize: z.number(),
        attachedBath: z.boolean(),
        balconies: z.number(),
        generator: z.boolean(),
        carParking: z.number(),
        floorNo: z.string(),
        floorType: z.string(),
        wifiFacility: z.boolean(),
        liftFacility: z.boolean(),
        securityGuard: z.boolean(),
        gasFacility: z.boolean(),
        CCTVFacility: z.boolean(),
        }).optional(),
        images: z.array(
            z.string()
        ).optional(),
        video: z.string().optional(),
        owner: z.string().optional()
    })
});

export const PropertyValidation = {
createPropertyZodSchema,
updatePropertyZodSchema
}