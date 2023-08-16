"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const requestValidator_1 = __importDefault(require("../middlewares/requestValidator"));
const user_validator_1 = require("../validators/user.validator");
const generateOTP_1 = __importDefault(require("../utils/generateOTP"));
const cloudinary_config_1 = require("../configs/cloudinary.config");
const uploadSingleImage_1 = __importDefault(require("../utils/uploadSingleImage"));
const userRouter = (0, express_1.Router)();
userRouter.get("/", user_controller_1.default.allUsers);
userRouter.post("/register", requestValidator_1.default.validateRequest(user_validator_1.UserValidation.createUserZodSchema), user_controller_1.default.register);
userRouter.post("/login", user_controller_1.default.login);
userRouter.patch("/update-profile", requestValidator_1.default.validateRequest(user_validator_1.UserValidation.updateUserZodSchema), user_controller_1.default.updateProfile);
userRouter.get("/auth", user_controller_1.default.auth);
userRouter.get("/refresh-token", user_controller_1.default.refreshToken);
userRouter.post("/generate-otp", generateOTP_1.default);
userRouter.post("/verify-otp", user_controller_1.default.verifyOTP);
userRouter.put("/change-password", user_controller_1.default.changePassword);
userRouter.post("/uploadId", cloudinary_config_1.upload.singleImage.single("image"), uploadSingleImage_1.default);
exports.default = userRouter;
