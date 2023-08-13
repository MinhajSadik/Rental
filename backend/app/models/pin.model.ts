import { Schema, model } from "mongoose";
import { IPin, IPinModel } from "../interfaces/pin.interface";

const pinSchema = new Schema<IPin>({
    pin: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now(),
    },
    userEmail: {
        type: String,
        required: true,
    },
}, 
{
    timestamps: true
})

// remove the pin automatically after 10 minutes
pinSchema.index({createdAt: 1}, {expireAfterSeconds: 600})

export const Pin = model<IPin, IPinModel>("Pin", pinSchema)
