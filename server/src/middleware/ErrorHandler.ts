import { NextFunction, Request, Response } from "express";
import { NODE_ENV } from "../config/Config";
import ErrorResponse from "../utiles/ErrorResponse";

/**
 * @name ErrorHandler
 * @description Handle the errors from the Data Base data
 * @param {any} err
 * @param {Request} _req
 * @param {Response} res
 * @param {NextFunction} _next
 * @returns {Object} error
 */
const ErrorHandler = (
    err: any,
    _req: Request,
    res: Response,
    _next: NextFunction
): object => {
    let error = { ...err };
    error.message = err.message;

    // Log to console for dev
    if (NODE_ENV === "development") {
        console.error(err);
    }

    let message: any;
    switch (err.name) {
        case "CastError":
            // Mongoose bad ObjectID
            message = "Resource not found";
            error = new ErrorResponse(message, 404);
            break;

        case "MongoServerError":
            // Mongoose duplicate Key
            message = `Duplicate value ${Object.values(err.keyValue)}`;
            error = new ErrorResponse(message, 404);
            break;

        case "ValidationError":
            // Mongoose validation error
            message = Object.values(err.errors).map(
                (value: any) => value.message
            );
            error = new ErrorResponse(message, 404);
            break;

        default:
            break;
    }

    return res.status(err.statusCode || 500).json({
        error: error.message || "Server Error",
    });
};

export default ErrorHandler;
