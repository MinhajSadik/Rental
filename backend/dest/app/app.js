"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const mdb_config_1 = __importDefault(require("./configs/mdb.config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// connecting to database
(0, mdb_config_1.default)();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Application working fine!",
    });
});
app.use("/user", user_route_1.default);
app.use("*", (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not found",
        errorMessages: [
            {
                path: req.originalUrl,
                message: "API not found",
            },
        ],
    });
});
exports.default = app;
