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
const property_service_1 = __importDefault(require("../services/property.service"));
const sendResponse_1 = require("../utils/sendResponse");
class PropertyController {
    addProperty(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield property_service_1.default.addProperty(req.body);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProperties(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield property_service_1.default.getProperties();
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProperty(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = yield property_service_1.default.getProperty(id);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    deleteProperty(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const result = yield property_service_1.default.deleteProperty(id);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
    updateProperty(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const updatedData = req.body;
                const result = yield property_service_1.default.updateProperty(id, updatedData);
                return sendResponse_1.handleResponse.sendResponse(res, result);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = new PropertyController();
