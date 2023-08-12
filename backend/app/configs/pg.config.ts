import { Client } from 'pg'

// PostgreSQL connection URL
const connectionString = "postgresql://postgres:CuzdtrPAsnVX37Bi@db.jpwrdaownwpejueukrmx.supabase.co:5432/postgres";

// Create a new PostgreSQL client
export const client = new Client({
  connectionString: connectionString
});

class PGConnection {
    async connect(): Promise<void>{
        try {
            client.connect()
            .then(() => {
            console.log('Connected to PostgreSQL database');
            })
            .catch((err:any) => {
            console.error('Error connecting to database:', err);
            });
        } catch (error: any) {
            console.log({
                message: "There was a server side error occurred",
                error: error.message,
            });
        }
    }
}

const pgConnection = new PGConnection();

export default pgConnection