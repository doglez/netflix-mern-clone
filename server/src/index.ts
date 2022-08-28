import colors from "colors";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import { corsAdmitUrl, maxFileUpload, nodeEnv, port } from "./config/Config";
import ConnectDB from "./database/ConnectDB";
import fileUpload from "express-fileupload";
import ExpressMongoSanitize from "express-mongo-sanitize";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import cors from "cors";
import ErrorHandler from "./middleware/ErrorHandler";

colors.enable();

const app = express();
ConnectDB();

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Dev loggin middleware
if (nodeEnv === "development") {
    app.use(morgan("dev"));
}

// File uploading
app.use(
    fileUpload({
        limits: { fieldSize: maxFileUpload },
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
app.use(
    helmet({
        crossOriginResourcePolicy: false,
    })
);

// Rate limit
const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000000,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(
    cors({
        origin: corsAdmitUrl,
        credentials: true, //access-control-allow-credentials:true
        optionsSuccessStatus: 200,
    })
);

// Route to access public dir
app.use(express.static("public"));

// Routes
app.get("/", (_req, res) => {
    res.status(200).json({
        data: "hola queso",
    });
});

// Handle error
app.use(ErrorHandler);

// Mount server
const server = app.listen(port, () => {
    console.log(
        `Server running in ${nodeEnv} mode on http://localhost:${port}`.yellow
            .bold
    );
});

// Handle unhandle promise rejection
process.on("unhandledRejection", (err) => {
    console.error(`Error: ${err}`.bgRed);
    server.close(() => process.exit(1));
});
