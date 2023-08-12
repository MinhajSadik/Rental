import { IBookingSchedule } from "../interfaces/bookingSchedule.interface";
import { BookingSchedule } from "../models/bookingSchedule.model";

class BookingScheduleService {
    addBookingSchedule = async(bookingSchedule: IBookingSchedule): Promise<IBookingSchedule | null> => {
        const newSchedule = await BookingSchedule.create(bookingSchedule)
        return newSchedule
    }
}

export default new BookingScheduleService()