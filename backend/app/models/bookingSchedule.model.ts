import { Schema, model } from "mongoose";
import { IBookingSchedule, IBookingScheduleModel } from "../interfaces/bookingSchedule.interface";

const bookingSchedule: Schema = new Schema<IBookingSchedule>({
    property: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Property",
    },
    selectedDate: {
        type: String,
        required: true
    },
    selectedTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


export const BookingSchedule = model<IBookingSchedule, IBookingScheduleModel>("BookingSchedule", bookingSchedule)
