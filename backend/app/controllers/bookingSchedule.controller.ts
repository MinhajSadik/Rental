import {Request, Response, NextFunction} from "express"
import BookingScheduleService from "../services/bookingSchedule.service"
import { handleResponse } from "../utils/sendResponse";

class BookingScheduleController {
    async addBookingSchedule (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await BookingScheduleService.addBookingSchedule(req.body);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
         next(error)   
        }
    }
    async getAllBookingSchedules (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await BookingScheduleService.getAllBookingSchedules();
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    async getSingleBookingSchedule (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await BookingScheduleService.getSingleBookingSchedule(req.params.id);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    async updateBookingSchedule (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await BookingScheduleService.updateBookingSchedule(req.params.id, req.body);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    async deleteBookingSchedule (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await BookingScheduleService.deleteBookingSchedule(req.params.id);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
}

export default new BookingScheduleController()