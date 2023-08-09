"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = __importDefault(require("./user.route"));
const property_route_1 = __importDefault(require("./property.route"));
const rootRouter = (0, express_1.Router)();
const allRoutes = [
    { path: "/user", route: user_route_1.default },
    { path: "/property", route: property_route_1.default }
];
allRoutes.forEach((route) => rootRouter.use(route.path, route.route));
exports.default = rootRouter;
