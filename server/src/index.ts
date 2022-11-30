import colors from "colors";
import cookieParser from "cookie-parser";
import express, { Express } from "express";
import morgan from "morgan";
import {
    CORS_ADMIT_URL,
    MAX_FILE_UPLOAD,
    NODE_ENV,
    PORT,
} from "./config/Config";
import ConnectDB from "./database/ConnectDB";
import fileUpload from "express-fileupload";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit, { RateLimitRequestHandler } from "express-rate-limit";
import hpp from "hpp";
import cors from "cors";
import ErrorHandler from "./middleware/ErrorHandler";
import Routes from "./routes/Routes";

colors.enable();

ConnectDB();

const app: Express = express();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev loggin middleware
if (NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// File uploading
app.use(
    fileUpload({
        limits: { fieldSize: MAX_FILE_UPLOAD },
        createParentPath: true,
        safeFileNames: true,
        preserveExtension: true,
        abortOnLimit: true,
    })
);

// Sanitize data prevent NoSQL injection && sanitize data
app.use(
    ExpressMongoSanitize({
        replaceWith: "_",
    })
);

// Set security header with helmet
app.use(helmet({ crossOriginResourcePolicy: false }));

// Rate limit
const limmiter: RateLimitRequestHandler = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000000,
});
app.use(limmiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(
    cors({
        origin: CORS_ADMIT_URL,
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

app.use(express.static(__dirname + "/public"));
app.use("/api/v1", Routes);

app.use(ErrorHandler);

const server = app.listen(PORT, () => {
    console.log(
        `Server running in ${NODE_ENV} mode on port http://localhost:${PORT}`
            .yellow.bold
    );
});

// Handle unhandle promise rejection
process.on("unhandledRejection", (reason: Error) => {
    console.log(`Error: ${reason}`.bgRed);
    server.close(() => process.exit(1));
});
