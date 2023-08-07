import { Router } from "express";
import userController from "../controllers/user.controller";
import requestValidator from "../middlewares/user.validation";
import { UserValidation } from "../validators/user.validator";
import generatePin from "../utils/generateOTP";
import { pinVerification } from "../middlewares/pin.verify";

const userRouter: Router = Router();

userRouter.post("/register", requestValidator.validateRequest(UserValidation.createUserZodSchema), userController.register);

userRouter.post("/login", userController.login);
userRouter.get("/auth", userController.auth);
userRouter.get("/refresh-token", userController.refreshToken);

userRouter.post("/generate-otp", generatePin);

userRouter.put("/forget-password", pinVerification.verifyPin, userController.forgetPassword);

export default userRouter;
