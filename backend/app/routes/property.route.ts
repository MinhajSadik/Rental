import { Router } from "express";
import PropertyController from "../controllers/property.controller";
import { upload } from "../configs/cloudinary.config";
import uploadImage from "../utils/uploadImage";
import uploadVideo from "../utils/uploadVideo";


const propertyRouter = Router();

propertyRouter.get("/:id", PropertyController.getProperty)
propertyRouter.delete("/:id", PropertyController.deleteProperty)
propertyRouter.patch("/update-property/:id", PropertyController.updateProperty)
propertyRouter.post("/add-property", PropertyController.addProperty)
propertyRouter.get("/", PropertyController.getProperties)

propertyRouter.post("/upload-video", upload.uploadVideo.single('video'), uploadVideo)
propertyRouter.post("/upload-image", upload.uploadImages.array('images'), uploadImage)

export default propertyRouter