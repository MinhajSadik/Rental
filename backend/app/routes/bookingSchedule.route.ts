import { Router } from 'express';
import bookingScheduleController from '../controllers/bookingSchedule.controller';

const bookingScheduleRoute = Router();

bookingScheduleRoute.post("/add-booking-schedule", bookingScheduleController.addBookingSchedule)

bookingScheduleRoute.get("/", bookingScheduleController.getAllBookingSchedules)
bookingScheduleRoute.get("/:id", bookingScheduleController.getSingleBookingSchedule)
bookingScheduleRoute.patch("/:id", bookingScheduleController.updateBookingSchedule)
bookingScheduleRoute.delete("/:id", bookingScheduleController.deleteBookingSchedule)

export default bookingScheduleRoute