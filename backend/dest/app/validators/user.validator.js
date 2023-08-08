"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required"
        }),
        email: zod_1.z.string({
            required_error: "Email is required"
        }),
        phoneNumber: zod_1.z.string({
            required_error: "Phone number is required"
        }),
        password: zod_1.z.string({
            required_error: "Password is required"
        }).optional(),
    })
});
const updateUserZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: "Name is required"
        }).optional(),
        email: zod_1.z.string({
            required_error: "Email is required"
        }).optional(),
        phoneNumber: zod_1.z.string({
            required_error: "Phone number is required"
        }).optional(),
        password: zod_1.z.string({
            required_error: "Password is required"
        }).optional(),
    })
});
exports.UserValidation = {
    createUserZodSchema,
    updateUserZodSchema
};
