import mysql from "mysql"


class MySQLConnection {
    async connect(): Promise<void> {
        try {
            const connection = mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'admin',
                database: 'rentalDb'
            });
            connection.connect(err => {
                if (err) {
                    console.error('Error connecting to MySQL:', err);
                    return;
                }
                console.log('Connected to MySQL server');
            });
        } catch (error: any) {
            console.log({
                message: "There was a server side error occurred",
                error: error.message,
            });
        }
    }
}



export default new MySQLConnection()