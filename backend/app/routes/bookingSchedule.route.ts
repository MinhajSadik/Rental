import { Router } from 'express';
import bookingScheduleController from '../controllers/bookingSchedule.controller';

const bookingScheduleRoute = Router();

bookingScheduleRoute.post("/add-booking-schedule", bookingScheduleController.addBookingSchedule)

export default bookingScheduleRoute