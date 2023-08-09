import { Router } from "express";
import userRouter from "./user.route";
import propertyRouter from "./property.route";

const rootRouter: Router = Router()

const allRoutes = [
    {path: "/user", route: userRouter},
    {path: "/property", route: propertyRouter}
]

allRoutes.forEach((route) => rootRouter.use(route.path, route.route))


export default rootRouter