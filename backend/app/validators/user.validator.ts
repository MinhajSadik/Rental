import { z } from 'zod';

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
        required_error: "Name is required"
    }),
    email: z.string({
        required_error: "Email is required"
    }),
    phoneNumber: z.string({
        required_error: "Phone number is required"
    }),
    password: z.string({
        required_error: "Password is required"
    }).optional(),
  })
});


const updateUserZodSchema = z.object({
  body: z.object({
    name: z.string({
        required_error: "Name is required"
    }).optional(),
    email: z.string({
        required_error: "Email is required"
    }).optional(),
    phoneNumber: z.string({
        required_error: "Phone number is required"
    }).optional(),
    password: z.string({
        required_error: "Password is required"
    }).optional(),
  })
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema
};
