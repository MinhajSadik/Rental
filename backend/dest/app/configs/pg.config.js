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
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
// PostgreSQL connection URL
const connectionString = "postgresql://postgres:CuzdtrPAsnVX37Bi@db.jpwrdaownwpejueukrmx.supabase.co:5432/postgres";
// Create a new PostgreSQL client
exports.client = new pg_1.Client({
    connectionString: connectionString
});
class PGConnection {
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                exports.client.connect()
                    .then(() => {
                    console.log('Connected to PostgreSQL database');
                })
                    .catch((err) => {
                    console.error('Error connecting to database:', err);
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
const pgConnection = new PGConnection();
exports.default = pgConnection;
