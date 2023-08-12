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
const http_status_1 = __importDefault(require("http-status"));
const property_model_1 = __importDefault(require("../models/property.model"));
class PropertyService {
    constructor() {
        this.addProperty = (property) => __awaiter(this, void 0, void 0, function* () {
            const newProperty = yield property_model_1.default.create(property);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Property added successfully!",
                data: newProperty
            };
        });
        this.getProperties = () => __awaiter(this, void 0, void 0, function* () {
            const properties = yield property_model_1.default.find({});
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Properties retrieved successfully!",
                data: properties
            };
        });
        this.getProperty = (id) => __awaiter(this, void 0, void 0, function* () {
            const property = yield property_model_1.default.findById(id);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Property retrieved successfully!",
                data: property
            };
        });
        this.deleteProperty = (id) => __awaiter(this, void 0, void 0, function* () {
            const property = yield property_model_1.default.findByIdAndDelete(id);
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Property retrieved successfully!",
                data: property
            };
        });
        this.updateProperty = (id, updatedData) => __awaiter(this, void 0, void 0, function* () {
            const property = yield property_model_1.default.findByIdAndUpdate(id, Object.assign({}, updatedData), {
                upsert: true,
                new: true
            });
            return {
                statusCode: http_status_1.default.OK,
                success: true,
                message: "Property retrieved successfully!",
                data: property
            };
        });
    }
}
exports.default = new PropertyService();
