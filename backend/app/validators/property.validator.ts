import { z as Zod } from "zod";

const createPropertyZodSchema = Zod.object({
    body: Zod.object({
        title: Zod.string({
          required_error: "Title is required"
        }),
        price: Zod.string({
          required_error: "Price is required"
        }),
        description: Zod.string({
          required_error: "Description is required"
        }),
        location: Zod.string({
          required_error: "Location is required"
        }),
        bedrooms: Zod.string({
          required_error: "Bedrooms is required"
        }),
        bathrooms: Zod.string({
          required_error: "Bathrooms is required"
        }),
        roomSize: Zod.string({
          required_error: "Room Size is required"
        }),
        additionals: Zod.object({
        propertySize: Zod.string(),
        attachedBath: Zod.string(),
        balconies: Zod.string(),
        generator: Zod.string(),
        carParking: Zod.string(),
        floorNo: Zod.string(),
        floorType: Zod.string(),
        wifiFacility: Zod.string(),
        liftFacility: Zod.string(),
        securityGuard: Zod.string(),
        gasFacility: Zod.string(),
        CCTVFacility: Zod.string(),
        }).optional(),
        images: Zod.array(
            Zod.string()
        ),
        video: Zod.string({
            required_error: "Video is required"
        }),
        owner: Zod.string({
            required_error: "Owner is required"
        })
    })
});

const updatePropertyZodSchema = Zod.object({
    body: Zod.object({
        title: Zod.string().optional(),
        price: Zod.string().optional(),
        description: Zod.string().optional(),
        location: Zod.string().optional(),
        bedrooms: Zod.string().optional(),
        bathrooms: Zod.string().optional(),
        roomSize: Zod.string().optional(),
        additionals: Zod.object({
        propertySize: Zod.string(),
        attachedBath: Zod.string(),
        balconies: Zod.string(),
        generator: Zod.string(),
        carParking: Zod.string(),
        floorNo: Zod.string(),
        floorType: Zod.string(),
        wifiFacility: Zod.string(),
        liftFacility: Zod.string(),
        securityGuard: Zod.string(),
        gasFacility: Zod.string(),
        CCTVFacility: Zod.string(),
        }).optional(),
        images: Zod.array(
            Zod.string()
        ).optional(),
        video: Zod.string().optional(),
        owner: Zod.string().optional()
    })
});

export const PropertyValidation = {
createPropertyZodSchema,
updatePropertyZodSchema
}