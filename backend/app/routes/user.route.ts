import { Router } from "express";
import userController from "../controllers/user.controller";
import requestValidator from "../middlewares/user.validation";
import { UserValidation } from "../validators/user.validator";
import generateOTP from "../utils/generateOTP";
import uploadImage from "../utils/uploadImage";
import { upload } from "../configs/cloudinary.config";

const userRouter: Router = Router();

userRouter.get("/", userController.allUsers)

userRouter.post("/register", requestValidator.validateRequest(UserValidation.createUserZodSchema), userController.register);

userRouter.post("/login", userController.login);

userRouter.patch("/update-profile", requestValidator.validateRequest(UserValidation.updateUserZodSchema),userController.updateProfile);

userRouter.get("/auth", userController.auth);

userRouter.get("/refresh-token", userController.refreshToken);

userRouter.post("/generate-otp", generateOTP);

userRouter.post("/verify-otp", userController.verifyOTP);

userRouter.put("/forget-password", userController.forgetPassword);

userRouter.post("/upload-image", upload.uploadImages.array('images'), uploadImage)
export default userRouter;
