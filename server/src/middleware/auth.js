import jwt from "jsonwebtoken";
import config from "../config/config.js";
import User from "../models/User.js";
import ErrorResponse from "../utilis/ErrorResponse.js";

/**
 * @name protect
 * @description Function to protect routes
 * @param req
 * @param res
 * @param next
 * @returns Void
 */
export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return next(
            new ErrorResponse("Not authorized to access this route", 401)
        );
    }

    try {
        const decode = jwt.verify(token, config.JWT_SECRET);

        req.user = await User.findById(decode.id);

        next();
    } catch (error) {
        return next(
            new ErrorResponse("Not authorized to access this route", 401)
        );
    }
};

/**
 * @name authorize
 * @description Function to authorize the access to route
 * @param roles
 * @returns void
 */
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorResponse(
                    `User with role ${req.user.role} is not authorized to access this route`,
                    403
                )
            );
        }

        next();
    };
};
