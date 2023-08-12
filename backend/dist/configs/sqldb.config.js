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
// pass: CuzdtrPAsnVX37Bi
class MySQLConnection {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = mysql_1.default.createConnection("postgresql://postgres:CuzdtrPAsnVX37Bi@db.jpwrdaownwpejueukrmx.supabase.co:5432/postgres");
                connection.connect(err => {
                    if (err) {
                        console.error('Error connecting to MySQL:', err.message);
                        return;
                    }
                    console.log('Connected to MySQL server');
                });
            }
            catch (error) {
                console.log({
                    message: "There was a server side error occurred",
                    error: error.message,
                });
            }
        });
    }
}
const mySQLConnection = new MySQLConnection();
exports.default = mySQLConnection;
