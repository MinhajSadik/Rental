"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pin = void 0;
const mongoose_1 = require("mongoose");
const pinSchema = new mongoose_1.Schema({
    pin: {
        type: String,
        required: true,
    },
    expireAt: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String,
        required: true,
    },
});
exports.Pin = (0, mongoose_1.model)("Pin", pinSchema);
