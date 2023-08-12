"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchedule = new mongoose_1.Schema({
    property: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: "Property",
    },
    selectedDate: {
        type: String,
        required: true
    },
    selectedTime: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});
const BookingSchedule = (0, mongoose_1.model)("BookingSchedule", bookingSchedule);
exports.default = BookingSchedule;
