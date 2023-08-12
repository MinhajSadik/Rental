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
const bookingSchedule_service_1 = __importDefault(require("../services/bookingSchedule.service"));
const sendResponse_1 = require("../utils/sendResponse");
class BookingScheduleController {
    constructor() {
        this.addBookingSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield bookingSchedule_service_1.default.addBookingSchedule(req.body);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getAllBookingSchedules = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield bookingSchedule_service_1.default.getAllBookingSchedules();
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.getSingleBookingSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield bookingSchedule_service_1.default.getSingleBookingSchedule(req.params.id);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateBookingSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield bookingSchedule_service_1.default.updateBookingSchedule(req.params.id, req.body);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteBookingSchedule = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield bookingSchedule_service_1.default.deleteBookingSchedule(req.params.id);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new BookingScheduleController();
