"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const property_controller_1 = __importDefault(require("../controllers/property.controller"));
const propertyRouter = (0, express_1.Router)();
propertyRouter.post("/add-property", property_controller_1.default.addProperty);
exports.default = propertyRouter;
