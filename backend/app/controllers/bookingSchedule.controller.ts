import {Request, Response, NextFunction} from "express"
import BookingScheduleService from "../services/bookingSchedule.service"
import { handleResponse } from "../utils/sendResponse";
import httpStatus from "http-status";

class BookingScheduleController {
    addBookingSchedule = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.addBookingSchedule(req.body);
            return handleResponse.sendResponse(res, {
                statusCode: httpStatus.OK,
                success: true,
                message: "Booking schedule confirmed",
                data: result
            })
        } catch (error) {
         next(error)   
        }
    }
}

export default new BookingScheduleController()