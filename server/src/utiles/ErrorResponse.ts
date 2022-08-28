/**
 * @name ErrorResponse
 * @description Class to create a message with status code
 * @param {string} message
 * @param {number} statusCode
 * @returns {object} error
 */
class ErrorResponse extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default ErrorResponse;
