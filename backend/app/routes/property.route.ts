import { Router } from "express";
import PropertyController from "../controllers/property.controller";
import { upload } from "../configs/cloudinary.config";
import uploadImage from "../utils/uploadImage";
import uploadVideo from "../utils/uploadVideo";


const propertyRouter = Router();

propertyRouter.post("/add-property", PropertyController.addProperty)

propertyRouter.post("/upload-video", upload.uploadVideo.single('video'), uploadVideo)
propertyRouter.post("/upload-image", upload.uploadImages.array('images'), uploadImage)

export default propertyRouter