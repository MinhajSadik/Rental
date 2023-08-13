import { Model, Types } from "mongoose"

export type IBookingSchedule = {
    property: Types.ObjectId,
    selectedDate: string,
    selectedTime: string,
    email: string,
    name: string,
    contactNumber: string,
    address: string,
}

export type IBookingScheduleModel = Model<IBookingSchedule, Record<string, unknown>>