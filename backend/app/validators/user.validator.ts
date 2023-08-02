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
    }),
  })
});

export const UserValidation = {
  createUserZodSchema
};
