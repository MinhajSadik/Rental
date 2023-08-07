"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mdb_config_1 = __importDefault(require("./configs/mdb.config"));
const handleGlobalError_1 = __importDefault(require("./errors/handleGlobalError"));
const root_route_1 = __importDefault(require("./routes/root.route"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
// connecting to database
mdb_config_1.default.connect();
app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Application working fine!",
    });
});
app.use("/api/v1", root_route_1.default);
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
app.use(handleGlobalError_1.default.handle);
exports.default = app;
