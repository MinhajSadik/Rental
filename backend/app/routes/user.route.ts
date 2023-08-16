import { Router } from "express";
import userController from "../controllers/user.controller";
import requestValidator from "../middlewares/requestValidator";
import { UserValidation } from "../validators/user.validator";
import generateOTP from "../utils/generateOTP";
import { upload } from "../configs/cloudinary.config";
import uploadSingleImage from "../utils/uploadSingleImage";

const userRouter: Router = Router();

userRouter.get("/", userController.allUsers)

userRouter.post("/register", requestValidator.validateRequest(UserValidation.createUserZodSchema), userController.register);

userRouter.post("/login", userController.login);

userRouter.patch("/update-profile", requestValidator.validateRequest(UserValidation.updateUserZodSchema), userController.updateProfile);

userRouter.get("/auth", userController.auth);

userRouter.get("/refresh-token", userController.refreshToken);

userRouter.post("/generate-otp", generateOTP);

userRouter.post("/verify-otp", userController.verifyOTP);

userRouter.put("/change-password", userController.changePassword);

userRouter.post("/uploadId", upload.singleImage.single("image"), uploadSingleImage)
export default userRouter;
