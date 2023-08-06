import sql from "mysql"


class MySQLConnection {
    async connect(): Promise<void> {
        try {
            const db = await sql.createConnection({
                host: "127.0.0.1",
                port: 3306 ,
                user: "root",
                password: "admin",
                database: "usersDb"
            })
            console.log("Database connected successfully!");
        } catch (error: any) {
            console.log({
                message: "Database is not connected",
                error: error.message,
            });
        }
    }
}


export default new MySQLConnection()