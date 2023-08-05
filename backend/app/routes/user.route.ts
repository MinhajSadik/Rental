import { Router } from "express";
import userController from "../controllers/user.controller";
import requestValidator from "../middlewares/user.validation";
import { UserValidation } from "../validators/user.validator";

const router = Router();

router.post("/register", requestValidator.validateRequest(UserValidation.createUserZodSchema), userController.register);

router.post("/login", userController.login);
router.put("/forget-password", userController.forgetPassword);

export default router;
