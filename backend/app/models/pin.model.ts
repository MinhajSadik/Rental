import { Schema, model } from "mongoose";
import { IPin, IPinModel } from "../interfaces/pin.interface";

const pinSchema = new Schema<IPin>({
    pin: {
        type: String,
        required: true,
    },
    expireAt: {
        type: Date,
        default: Date.now() + 10 * 60 * 1000,
    },
    userEmail: {
        type: String,
        required: true,
    },
}, 
{
    timestamps: true
});

// Remove the pin automatically after 10 minutes
// pinSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

export const Pin = model<IPin, IPinModel>("Pin", pinSchema);
