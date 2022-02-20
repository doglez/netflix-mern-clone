import colors from "colors";
import express from "express";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import morgan from "morgan";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import xss from "xss-clean";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import cors from "cors";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./database/connectDB.js";

colors.enable();

const app = express();
connectDB();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev loggin middleware
if (config.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// Sanitize data prevent NoSQL injection && sanitize data
app.use(
    ExpressMongoSanitize({
        replaceWith: "_",
    })
);

// Set security header with helmet
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

// Route

// Error handler
app.use(errorHandler);

// Listen port
const server = app.listen(config.PORT, () => {
    console.log(
        `Server running in ${config.NODE_ENV} mode on http://localhost:${config.PORT}`
            .yellow.bold
    );
});

// Handle unhandle promise rejaction
process.on("unhandledRejection", (err, promise) => {
    console.error(`Error: ${err}`.bgRed);
    server.close(() => process.exit(1));
});
