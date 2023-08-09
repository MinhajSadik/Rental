import { Router } from "express";
import PropertyController from "../controllers/property.controller";


const propertyRouter = Router();

propertyRouter.post("/add-property", PropertyController.addProperty)

export default propertyRouter