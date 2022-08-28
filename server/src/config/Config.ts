import dotenv from "dotenv";

dotenv.config({ path: "./.env.dev" });

export const nodeEnv: string = process.env.NODE_ENV as string;
export const port: string = process.env.PORT as string;
export const corsAdmitUrl: string = process.env.CORS_ADMIT_URL as string;
export const mongoUrl: string = process.env.MONGO_URL as string;
export const fileUploadPath: string = process.env.FILE_UPLOAD_PATH as string;
export const maxFileUpload: number = process.env.MAX_FILE_UPLOAD as unknown as number;
export const jwtSecret: string = process.env.JWT_SECRET as string;
export const jwtExpire: string = process.env.JWT_EXPIRE as string;
export const jwtCookieExpire: string = process.env.JWT_COOKIE_EXPIRE as string;
export const smtpHost: string = process.env.SMTP_HOST as string;
export const smtpPort: string = process.env.SMTP_PORT as string;
export const smtpEmail: string = process.env.SMTP_EMAIL as string;
export const smtpPassword: string = process.env.SMTP_PASSWORD as string;
export const fromEmail: string = process.env.FROM_EMAIL as string;
export const fromName: string = process.env.FROM_NAME as string;
