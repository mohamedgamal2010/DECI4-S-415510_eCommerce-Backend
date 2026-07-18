import dotenv from 'dotenv';
dotenv.config();

export const config_project = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL
};