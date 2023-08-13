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
        default: Date.now(),
    },
    userEmail: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});
// remove the pin automatically after 10 minutes
pinSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });
exports.Pin = (0, mongoose_1.model)("Pin", pinSchema);
