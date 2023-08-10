"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const property_controller_1 = __importDefault(require("../controllers/property.controller"));
const cloudinary_config_1 = require("../configs/cloudinary.config");
const uploadImage_1 = __importDefault(require("../utils/uploadImage"));
const uploadVideo_1 = __importDefault(require("../utils/uploadVideo"));
const propertyRouter = (0, express_1.Router)();
propertyRouter.post("/add-property", property_controller_1.default.addProperty);
propertyRouter.post("/upload-video", cloudinary_config_1.upload.uploadVideo.single('video'), uploadVideo_1.default);
propertyRouter.post("/upload-image", cloudinary_config_1.upload.uploadImages.array('images'), uploadImage_1.default);
exports.default = propertyRouter;
