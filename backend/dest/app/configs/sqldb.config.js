"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
class MySQLConnection {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield mysql_1.default.createConnection({
                    host: "127.0.0.1",
                    port: 3306,
                    user: "root",
                    password: "admin",
                    database: "usersDb"
                });
                console.log("Database connected successfully!");
            }
            catch (error) {
                console.log({
                    message: "Database is not connected",
                    error: error.message,
                });
            }
        });
    }
}
exports.default = new MySQLConnection();
