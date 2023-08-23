import { z as Zod } from 'zod';

const createUserZodSchema = Zod.object({
  body: Zod.object({
    name: Zod.string({
        required_error: "Name is required"
    }),
    email: Zod.string({
        required_error: "Email is required"
    }),
    phoneNumber: Zod.string({
        required_error: "Phone number is required"
    }),
    password: Zod.string({
        required_error: "Password is required"
    }).optional(),
    role: Zod.string().optional(),
    IDCard: Zod.object({
      front: Zod.string({
        required_error: "Front part is required"
      }),
      back: Zod.string({
        required_error: "Back part is required"
      })
    })
  })
});


const updateUserZodSchema = Zod.object({
  body: Zod.object({
    name: Zod.string({
        required_error: "Name is required"
    }).optional(),
    email: Zod.string({
        required_error: "Email is required"
    }).optional(),
    phoneNumber: Zod.string({
        required_error: "Phone number is required"
    }).optional(),
    password: Zod.string({
        required_error: "Password is required"
    }).optional(),
    role: Zod.string().optional(),
    IDCard: Zod.object({
      front: Zod.string({
        required_error: "Front part is required"
      }),
      back: Zod.string({
        required_error: "Back part is required"
      })
    }).optional(),
    isVerified: Zod.boolean()
  })
});

export const UserValidation = {
  createUserZodSchema,
  updateUserZodSchema
};
