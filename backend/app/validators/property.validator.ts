import { z } from "zod";

const createPropertyZodSchema = z.object({
    body: z.object({
        title: z.string({
          required_error: "Title is required"
        }),
        price: z.string({
          required_error: "Price is required"
        }),
        description: z.string({
          required_error: "Description is required"
        }),
        location: z.string({
          required_error: "Location is required"
        }),
        bedrooms: z.string({
          required_error: "Bedrooms is required"
        }),
        bathrooms: z.string({
          required_error: "Bathrooms is required"
        }),
        roomSize: z.string({
          required_error: "Room Size is required"
        }),
        additionals: z.object({
        propertySize: z.string(),
        attachedBath: z.string(),
        balconies: z.string(),
        generator: z.string(),
        carParking: z.string(),
        floorNo: z.string(),
        floorType: z.string(),
        wifiFacility: z.string(),
        liftFacility: z.string(),
        securityGuard: z.string(),
        gasFacility: z.string(),
        CCTVFacility: z.string(),
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
        title: z.string().optional(),
        price: z.string().optional(),
        description: z.string().optional(),
        location: z.string().optional(),
        bedrooms: z.string().optional(),
        bathrooms: z.string().optional(),
        roomSize: z.string().optional(),
        additionals: z.object({
        propertySize: z.string(),
        attachedBath: z.string(),
        balconies: z.string(),
        generator: z.string(),
        carParking: z.string(),
        floorNo: z.string(),
        floorType: z.string(),
        wifiFacility: z.string(),
        liftFacility: z.string(),
        securityGuard: z.string(),
        gasFacility: z.string(),
        CCTVFacility: z.string(),
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