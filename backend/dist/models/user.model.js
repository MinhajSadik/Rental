"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: "user"
    },
    IDCard: {
        front: {
            type: String,
            required: true
        },
        back: {
            type: String,
            required: true
        },
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profile: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
exports.User = (0, mongoose_1.model)("User", userSchema);
