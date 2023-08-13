"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingSchedule_controller_1 = __importDefault(require("../controllers/bookingSchedule.controller"));
const bookingScheduleRoute = (0, express_1.Router)();
bookingScheduleRoute.post("/add-booking-schedule", bookingSchedule_controller_1.default.addBookingSchedule);
bookingScheduleRoute.get("/", bookingSchedule_controller_1.default.getAllBookingSchedules);
bookingScheduleRoute.get("/:id", bookingSchedule_controller_1.default.getSingleBookingSchedule);
bookingScheduleRoute.patch("/:id", bookingSchedule_controller_1.default.updateBookingSchedule);
bookingScheduleRoute.delete("/:id", bookingSchedule_controller_1.default.deleteBookingSchedule);
exports.default = bookingScheduleRoute;
