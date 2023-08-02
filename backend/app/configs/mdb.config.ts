import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();


const mongoDBConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string)
        console.log("Database connected successfully!")
    } catch (error: any) {
        console.log({
            message: "Database is not connected",
            error: error.message
        })
    }
}

export default mongoDBConnection