import { Router } from "express";
import userController from "../controllers/user.controller";
import requestValidator from "../middlewares/user.validation";
import { UserValidation } from "../validators/user.validator";
import generatePin from "../utils/generateOTP";
import { pinVerification } from "../middlewares/pin.verify";

const router = Router();

router.post("/register", requestValidator.validateRequest(UserValidation.createUserZodSchema), userController.register);

router.post("/login", userController.login);

router.post("/generate-otp", generatePin);

router.put("/forget-password", pinVerification.verifyPin, userController.forgetPassword);

export default router;
