import { Schema, model } from "mongoose";
import { IUser, IUserModel } from "../interfaces/user.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    IDCard: {
        front: {
            type: String,
            required: true
        },
        back: {
            type: String,
            required: true
        },
    },
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

export const User = model<IUser, IUserModel>("User", userSchema)