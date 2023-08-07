"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_validation_1 = __importDefault(require("../middlewares/user.validation"));
const user_validator_1 = require("../validators/user.validator");
const generateOTP_1 = __importDefault(require("../utils/generateOTP"));
const pin_verify_1 = require("../middlewares/pin.verify");
const userRouter = (0, express_1.Router)();
userRouter.post("/register", user_validation_1.default.validateRequest(user_validator_1.UserValidation.createUserZodSchema), user_controller_1.default.register);
userRouter.post("/login", user_controller_1.default.login);
userRouter.get("/auth", user_controller_1.default.auth);
userRouter.get("/refresh-token", user_controller_1.default.refreshToken);
userRouter.post("/generate-otp", generateOTP_1.default);
userRouter.put("/forget-password", pin_verify_1.pinVerification.verifyPin, user_controller_1.default.forgetPassword);
exports.default = userRouter;
