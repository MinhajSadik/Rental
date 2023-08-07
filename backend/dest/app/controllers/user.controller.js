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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse_1 = require("../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    constructor() {
        this.register = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.body;
                const createdUser = yield user_service_1.default.register(user);
                return sendResponse_1.handleResponse.sendResponse(res, {
                    statusCode: http_status_1.default.OK,
                    success: true,
                    message: "User registration successful!",
                    data: createdUser,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = yield user_service_1.default.login(req.body), { refreshToken } = _a, others = __rest(_a, ["refreshToken"]);
                // set the refresh token to the cookie
                res.cookie("refreshToken", refreshToken);
                return sendResponse_1.handleResponse.sendResponse(res, others);
            }
            catch (error) {
                next(error);
            }
        });
        this.forgetPassword = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield user_service_1.default.forgetPassword(req.body);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.auth = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const result = yield user_service_1.default.auth(token);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
        this.refreshToken = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshToken = req.headers.authorization;
                const result = yield user_service_1.default.refreshToken(refreshToken);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new UserController();
