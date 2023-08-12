import { IBookingSchedule } from "../interfaces/bookingSchedule.interface";
import { BookingSchedule } from "../models/bookingSchedule.model";

class BookingScheduleService {
    addBookingSchedule = async(bookingSchedule: IBookingSchedule): Promise<IBookingSchedule | null> => {
        const newSchedule = await BookingSchedule.create(bookingSchedule)
        return newSchedule
    }
    getAllBookingSchedules = async(): Promise<IBookingSchedule[]> => {
        const schedules = await BookingSchedule.find().populate("property")
        return schedules
    }
}

export default new BookingScheduleService()