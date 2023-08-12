import { Router } from "express";
import userRouter from "./user.route";
import propertyRouter from "./property.route";
import bookingScheduleRoute from "./bookingSchedule.route";

const rootRouter: Router = Router()

const allRoutes = [
    {path: "/user", route: userRouter},
    {path: "/property", route: propertyRouter},
    {path: "/booking-schedule", route: bookingScheduleRoute}
]

allRoutes.forEach((route) => rootRouter.use(route.path, route.route))


export default rootRouter