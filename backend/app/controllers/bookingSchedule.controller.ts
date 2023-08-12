import {Request, Response, NextFunction} from "express"
import BookingScheduleService from "../services/bookingSchedule.service"
import { handleResponse } from "../utils/sendResponse";

class BookingScheduleController {
    addBookingSchedule = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.addBookingSchedule(req.body);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
         next(error)   
        }
    }
    getAllBookingSchedules = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.getAllBookingSchedules();
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    getSingleBookingSchedule = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.getSingleBookingSchedule(req.params.id);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    updateBookingSchedule = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.updateBookingSchedule(req.params.id, req.body);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
    deleteBookingSchedule = async(req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await BookingScheduleService.deleteBookingSchedule(req.params.id);
            return handleResponse.sendResponse(res, result)
        } catch (error) {
            next(error)
        }

    }
}

export default new BookingScheduleController()