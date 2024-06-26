import { Router } from "express";
import PropertyController from "../controllers/property.controller";
import { upload } from "../configs/cloudinary.config";
import uploadImage from "../utils/uploadMultipleImage";
import uploadVideo from "../utils/uploadVideo";
import requestValidator from "../middlewares/requestValidator";
import { PropertyValidation } from "../validators/property.validator";


const propertyRouter = Router();

propertyRouter.get("/", PropertyController.getProperties)


propertyRouter.get("/:id", PropertyController.getProperty)

propertyRouter.delete("/:id", PropertyController.deleteProperty)

propertyRouter.patch("/update-property/:id", requestValidator.validateRequest(PropertyValidation.updatePropertyZodSchema) ,PropertyController.updateProperty)

propertyRouter.post("/add-property", requestValidator.validateRequest(PropertyValidation.createPropertyZodSchema), PropertyController.addProperty)


propertyRouter.post("/upload-video", upload.uploadVideo.single('video'), uploadVideo)

propertyRouter.post("/upload-image", upload.multipleImage.array('images'), uploadImage)

export default propertyRouter