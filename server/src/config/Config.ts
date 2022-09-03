import dotenv from "dotenv";

dotenv.config({ path: "./dev.env" });

export const NODE_ENV: string = String(process.env.NODE_ENV);
export const PORT: number = Number(process.env.PORT);
export const CORS_ADMIT_URL: string = String(process.env.CORS_ADMIT_URL);
export const MONGO_URL: string = String(process.env.MONGO_URL);
export const FILE_UPLOAD_PATH: string = String(process.env.FILE_UPLOAD_PATH);
export const MAX_FILE_UPLOAD: number = Number(process.env.MAX_FILE_UPLOAD);
export const JWT_SECRET: string = String(process.env.JWT_SECRET);
export const JWT_EXPIRE: string = String(process.env.JWT_EXPIRE);
export const JWT_COOKIE_EXPIRE: number = Number(process.env.JWT_COOKIE_EXPIRE);
export const SMTP_HOST: string = String(process.env.SMTP_HOST);
export const SMTP_PORT: number = Number(process.env.SMTP_PORT);
export const SMTP_EMAIL: string = String(process.env.SMTP_EMAIL);
export const SMTP_PASSWORD: string = String(process.env.SMTP_PASSWORD);
export const FROM_EMAIL: string = String(process.env.FROM_EMAIL);
export const FROM_NAME: string = String(process.env.FROM_NAME);
