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
const router = (0, express_1.Router)();
router.post("/register", user_validation_1.default.validateRequest(user_validator_1.UserValidation.createUserZodSchema), user_controller_1.default.register);
router.post("/login", user_controller_1.default.login);
router.post("/generate-otp", generateOTP_1.default);
router.put("/forget-password", pin_verify_1.pinVerification.verifyPin, user_controller_1.default.forgetPassword);
exports.default = router;
