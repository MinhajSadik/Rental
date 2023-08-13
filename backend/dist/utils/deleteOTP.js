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
const pin_model_1 = require("../models/pin.model");
// Function to remove expired pins
function removeExpiredPin() {
    return __awaiter(this, void 0, void 0, function* () {
        const currentTime = new Date();
        console.log("From delete OTP");
        try {
            const result = yield pin_model_1.Pin.deleteMany({ expireAt: { $lte: currentTime } });
            console.log(`${result.deletedCount} expired pins removed.`);
        }
        catch (error) {
            console.error("Error removing expired pins:", error);
        }
    });
}
exports.default = removeExpiredPin;
