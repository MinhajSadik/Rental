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
        type: Date,
        default: Date.now() + 10 * 60 * 1000,
    },
    userEmail: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
// Remove the pin automatically after 10 minutes
// pinSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });
exports.Pin = (0, mongoose_1.model)("Pin", pinSchema);
