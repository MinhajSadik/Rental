import httpStatus from "http-status";
import { IBookingSchedule } from "../interfaces/bookingSchedule.interface";
import { BookingSchedule } from "../models/bookingSchedule.model";
import { IGenericResponse } from "../utils/sendResponse";

class BookingScheduleService {
    addBookingSchedule = async(bookingSchedule: IBookingSchedule): Promise<IGenericResponse> => {
        const newSchedule = await BookingSchedule.create(bookingSchedule)
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Booking schedule confirmed",
            data: newSchedule
        }
    }
    getAllBookingSchedules = async(): Promise<IGenericResponse> => {
        const schedules = await BookingSchedule.find().populate("property")
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Booking schedules retrieved successfully!",
            data: schedules
        }
    }
    getSingleBookingSchedule = async(id: string): Promise<IGenericResponse> => {
        const schedule = await BookingSchedule.findById(id).populate("property")
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Booking schedule retrieved successfully!",
            data: schedule
        }
    }
    updateBookingSchedule = async(id: string, updatedData: Partial<IBookingSchedule>): Promise<IGenericResponse> => {
        const schedule = await BookingSchedule.findByIdAndUpdate(id, updatedData, {
            new: true
        }).populate("property")
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Booking schedule updated successfully!",
            data: schedule
        }
    }
    deleteBookingSchedule = async(id: string): Promise<IGenericResponse> => {
        const result = await BookingSchedule.findByIdAndDelete(id)
        return {
            statusCode: httpStatus.OK,
            success: true,
            message: "Booking schedule deleted",
            data: result
        }
    }
}

export default new BookingScheduleService()