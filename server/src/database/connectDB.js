import mongoose from "mongoose";
import config from "../config/config.js";

const connectDB = async () => {
    const conn = await mongoose.connect(config.MONGO_URL);

    console.log(`MongoDB connected: ${conn.connection.host}`.green);
};

export default connectDB;
