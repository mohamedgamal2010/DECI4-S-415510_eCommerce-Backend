import mongoose from "mongoose";
import { config_project } from '../config/config.js';

const ConnectDB = async () => {
    try {
        await mongoose.connect(config_project.mongoUrl);
        console.log("the database connected successfully");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default ConnectDB;