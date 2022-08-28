import mongoose from "mongoose";
import { mongoUrl } from "../config/Config";

/**
 * @name ConnectDB
 * @description Connect with DB through mongoose
 * @returns {Promise} void
 */
const ConnectDB = async (): Promise<void> => {
    const conn: typeof mongoose = await mongoose.connect(mongoUrl);

    console.log(`MongoDB connected: ${conn.connection.host}`.green);
};

export default ConnectDB;
