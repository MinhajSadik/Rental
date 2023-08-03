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
exports.UserService = void 0;
const user_model_1 = require("../models/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const register = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // hash user password
    const hashedPassword = yield bcrypt_1.default.hash(user.password, 12);
    user.password = hashedPassword;
    const newUser = yield user_model_1.User.create(user);
    return newUser;
});
const login = (user) => __awaiter(void 0, void 0, void 0, function* () {
    // check weather the user exist in database or not
    const isUserExist = yield user_model_1.User.findOne({ email: user.email });
    if (!isUserExist) {
        return {
            statusCode: http_status_1.default.NOT_FOUND,
            success: false,
            message: "User does not exist",
            data: null
        };
    }
    // match password
    const isPasswordMatched = yield bcrypt_1.default.compare(user.password, isUserExist.password);
    if (!isPasswordMatched) {
        return {
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: "Incorrect password",
            data: null
        };
    }
    // generate access token and refresh token
    const jwtPayload = {
        userId: isUserExist._id,
        email: isUserExist.email,
        role: isUserExist.role
    };
    const accessToken = yield jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_SECRET);
    const refreshToken = yield jsonwebtoken_1.default.sign(jwtPayload, process.env.JWT_REFRESH_SECRET);
    return {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully!",
        refreshToken,
        data: {
            accessToken
        }
    };
});
exports.UserService = {
    register,
    login
};
