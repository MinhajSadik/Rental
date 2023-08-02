import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import validateRequest from "../middlewares/user.validation";
import { UserValidation } from "../validators/user.validator";

const router = Router();

router.post("/register", validateRequest(UserValidation.createUserZodSchema) ,UserController.register);

router.post("/login" ,UserController.login);

export default router;
