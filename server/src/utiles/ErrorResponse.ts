import { Response } from "express";

/**
 * @name ErrorResponse
 * @description Class to create a message with status code
 * @param {string} message
 * @param {number} statusCode
 * @returns {object} error
 */
class ErrorResponse extends Error {
    statusCode: number;
    constructor(message: any, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    errorReturn(res: Response) {
        return res.status(this.statusCode).json({
            error: this.message,
        });
    }
}

export default ErrorResponse;
