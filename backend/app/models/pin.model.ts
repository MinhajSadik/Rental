import { Schema, model } from "mongoose";
import { IPin, IPinModel } from "../interfaces/pin.interface";

const pinSchema = new Schema<IPin>({
    pin: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
}, 
{
    timestamps: true
});

export const Pin = model<IPin, IPinModel>("Pin", pinSchema);
