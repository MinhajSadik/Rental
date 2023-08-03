"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_validation_1 = __importDefault(require("../middlewares/user.validation"));
const user_validator_1 = require("../validators/user.validator");
const router = (0, express_1.Router)();
router.post("/register", (0, user_validation_1.default)(user_validator_1.UserValidation.createUserZodSchema), user_controller_1.UserController.register);
router.post("/login", user_controller_1.UserController.login);
router.put("/forget-password", user_controller_1.UserController.forgetPassword);
exports.default = router;
