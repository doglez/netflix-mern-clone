/**
 * @name ErrorResponse
 * @description Class that build a message with status code
 */
class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export default ErrorResponse;
