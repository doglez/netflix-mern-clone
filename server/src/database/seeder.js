import fs from "fs";
import mongoose from "mongoose";
import config from "../config/config.js";
import User from "../models/User.js";
import colors from "colors";

mongoose.connect(config.MONGO_URL);

colors.enable();

// Read JSon files
const dir = process.cwd();

const users = JSON.parse(fs.readFileSync(`${dir}/_data/users.json`, "utf-8"));

/**
 * @name importData
 * @description Run seeds to load the database node src/database/seeder -i
 */
const importData = async () => {
    try {
        await User.create(users);
        console.log("Data imported...".green.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
};

/**
 * @name deleteData
 * @description Delete data in Database node src/database/seeder -d
 */
const deleteData = async () => {
    try {
        await User.deleteMany();
        console.log("Data destroyed...".red.inverse);
        process.exit();
    } catch (error) {
        console.error(error);
    }
};

// Run process from terminal
if (process.argv[2] === "-i") {
    importData();
} else if (process.argv[2] === "-d") {
    deleteData();
}
