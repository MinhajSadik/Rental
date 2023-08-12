"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const bookingSchedule_model_1 = require("../models/bookingSchedule.model");
class BookingScheduleService {
    constructor() {
        this.addBookingSchedule = (bookingSchedule) => __awaiter(this, void 0, void 0, function* () {
            const newSchedule = yield bookingSchedule_model_1.BookingSchedule.create(bookingSchedule);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Booking schedule confirmed",
                data: newSchedule
            };
        });
        this.getAllBookingSchedules = () => __awaiter(this, void 0, void 0, function* () {
            const schedules = yield bookingSchedule_model_1.BookingSchedule.find().populate("property");
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Booking schedules retrieved successfully!",
                data: schedules
            };
        });
        this.getSingleBookingSchedule = (id) => __awaiter(this, void 0, void 0, function* () {
            const schedule = yield bookingSchedule_model_1.BookingSchedule.findById(id).populate("property");
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Booking schedule retrieved successfully!",
                data: schedule
            };
        });
        this.updateBookingSchedule = (id, updatedData) => __awaiter(this, void 0, void 0, function* () {
            const schedule = yield bookingSchedule_model_1.BookingSchedule.findByIdAndUpdate(id, updatedData, {
                new: true
            }).populate("property");
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Booking schedule updated successfully!",
                data: schedule
            };
        });
        this.deleteBookingSchedule = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield bookingSchedule_model_1.BookingSchedule.findByIdAndDelete(id);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Booking schedule deleted",
                data: result
            };
        });
    }
}
exports.default = new BookingScheduleService();
