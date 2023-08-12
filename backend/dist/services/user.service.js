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
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const pin_model_1 = require("../models/pin.model");
class UserService {
    constructor() {
        this.register = (user) => __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(user.password, 12);
            user.password = hashedPassword;
            const newUser = yield user_model_1.User.create(user);
            return newUser;
        });
        this.login = (user) => __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield user_model_1.User.findOne({
                $or: [
                    { email: user.emailOrPhone },
                    { phoneNumber: user.emailOrPhone }
                ]
            });
            if (!isUserExist) {
                return {
                    statusCode: http_status_1.default.NOT_FOUND,
                    success: false,
                    message: "User does not exist",
                    data: null,
                };
            }
            const isPasswordMatched = yield bcrypt_1.default.compare(user.password, isUserExist.password);
            if (!isPasswordMatched) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Incorrect password",
                    data: null,
                };
            }
            const jwtPayload = {
                userId: isUserExist._id,
                email: isUserExist.email,
                role: isUserExist.role,
            };
            const accessToken = yield jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_SECRET, { expiresIn: "1d" });
            const refreshToken = yield jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_REFRESH_SECRET, { expiresIn: "1d" });
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User logged in successfully!",
                refreshToken,
                data: {
                    accessToken,
                    user: isUserExist
                },
            };
        });
        this.verifyOTP = (otp) => __awaiter(this, void 0, void 0, function* () {
            const isPinExist = yield pin_model_1.Pin.findOne({ pin: otp });
            if (!isPinExist) {
                return {
                    statusCode: http_status_1.default.NOT_FOUND,
                    success: false,
                    message: "Your pin code does not exist",
                    data: null
                };
            }
            // check time expiration
            const currentTime = Date.now();
            if (currentTime > isPinExist.expireAt) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Time expired",
                    data: null
                };
            }
            // match the pin
            if (isPinExist.pin !== otp) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Invalid pin code",
                    data: null
                };
            }
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Your can change your password",
                data: null
            };
        });
        this.forgetPassword = (user) => __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield user_model_1.User.findOne({ email: user.email });
            if (!isUserExist) {
                return {
                    statusCode: http_status_1.default.NOT_FOUND,
                    success: false,
                    message: "User does not exist",
                    data: null,
                };
            }
            const hashedPassword = yield bcrypt_1.default.hash(user.password, 12);
            const updatedUser = yield user_model_1.User.findByIdAndUpdate(isUserExist._id, { $set: { password: hashedPassword } }, { new: true });
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Password changed successfully",
                data: updatedUser,
            };
        });
        this.auth = (token) => __awaiter(this, void 0, void 0, function* () {
            const isValidToken = yield jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
            if (!isValidToken) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Invalid token",
                    data: null,
                };
            }
            const isUserExist = yield user_model_1.User.findOne({ email: isValidToken.email });
            if (!isUserExist) {
                return {
                    statusCode: http_status_1.default.NOT_FOUND,
                    success: false,
                    message: "User does not exist",
                    data: null,
                };
            }
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User retrieved successfully",
                data: isUserExist,
            };
        });
        this.refreshToken = (refreshToken) => __awaiter(this, void 0, void 0, function* () {
            if (!refreshToken) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Refresh token not provided",
                    data: null,
                };
            }
            const isValidToken = yield jsonwebtoken_1.default.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            if (!isValidToken) {
                return {
                    statusCode: http_status_1.default.BAD_REQUEST,
                    success: false,
                    message: "Invalid refresh token",
                    data: null,
                };
            }
            // Generate a new access token
            const accessToken = jsonwebtoken_1.default.sign(isValidToken, process.env.JWT_SECRET, { expiresIn: '1d' });
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Token generated successfully!",
                data: {
                    accessToken: accessToken
                },
            };
        });
        this.updateProfile = (user) => __awaiter(this, void 0, void 0, function* () {
            const isUserExist = yield user_model_1.User.findOne({ email: user.email });
            if (isUserExist) {
                const updatedUser = yield user_model_1.User.findOneAndUpdate({ email: user.email }, Object.assign({}, user), { upsert: true, new: true });
                return {
                    statusCode: http_status_1.default.OK,
                    success: true,
                    message: "User updated successfully",
                    data: updatedUser,
                };
            }
            const newUser = yield user_model_1.User.create(user);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "User updated successfully",
                data: newUser,
            };
        });
        this.allUsers = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield user_model_1.User.find({});
            return users;
        });
    }
}
exports.default = new UserService();
