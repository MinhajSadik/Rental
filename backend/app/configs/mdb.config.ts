import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

class MongoDBConnection {
    constructor(private readonly mongoURI: string) {}

    async connect(): Promise<void> {
        try {
            await mongoose.connect(this.mongoURI);
            console.log("Database connected successfully!");
        } catch (error: any) {
            console.log({
                message: "Database is not connected",
                error: error.message,
            });
        }
    }
}

const mongoDBConnection = new MongoDBConnection(process.env.MONGODB_URI as string);

export default mongoDBConnection;
