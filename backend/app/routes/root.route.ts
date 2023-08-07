import { Router } from "express";
import userRouter from "./user.route";

const rootRouter: Router = Router()

const allRoutes = [
    {path: "/user", route: userRouter}
]

allRoutes.forEach((route) => rootRouter.use(route.path, route.route))


export default rootRouter