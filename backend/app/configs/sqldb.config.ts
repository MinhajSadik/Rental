import mysql from "mysql"

// pass: CuzdtrPAsnVX37Bi

class MySQLConnection {
    async connect(): Promise<void> {
        try {
            const connection = mysql.createConnection("postgresql://postgres:CuzdtrPAsnVX37Bi@db.jpwrdaownwpejueukrmx.supabase.co:5432/postgres");
            connection.connect(err => {
                if (err) {
                    console.error('Error connecting to MySQL:', err.message);
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


const mySQLConnection =   new MySQLConnection()

export default mySQLConnection