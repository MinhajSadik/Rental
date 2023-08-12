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
Object.defineProperty(exports, "__esModule", { value: true });
const bookingSchedule_model_1 = require("../models/bookingSchedule.model");
class BookingScheduleService {
    constructor() {
        this.addBookingSchedule = (bookingSchedule) => __awaiter(this, void 0, void 0, function* () {
            const newSchedule = yield bookingSchedule_model_1.BookingSchedule.create(bookingSchedule);
            return newSchedule;
        });
        this.getAllBookingSchedules = () => __awaiter(this, void 0, void 0, function* () {
            const schedules = yield bookingSchedule_model_1.BookingSchedule.find().populate("property");
            return schedules;
        });
    }
}
exports.default = new BookingScheduleService();
