import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../utiles/ErrorResponse";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/Config";
import User from "../models/User";
import AsyncHandler from "./AsyncHandler";

interface IReqUser extends Request {
    user: any;
}

/**
 * @name Protect
 * @description Protect routes if users don't has permissions
 * @param {IReqUser} req
 * @param {Response} _res
 * @param {NextFunction} next
 * @returns {void} access
 */
export const Protect = AsyncHandler(
    async (req: IReqUser, _res: Response, next: NextFunction) => {
        let token;

        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer")
        ) {
            token = req.headers.authorization.split(" ")[1]; // Set token from Bearer token in header
        } else if (req.cookies.token) {
            // Use this if use Cookies
            token = req.cookies.token; // Set token from cookie
        }

        if (!token) {
            return next(
                new ErrorResponse("Not authorized to access this route", 401)
            );
        }

        try {
            // Verify token
            const decode: any = jwt.verify(token, JWT_SECRET);
            req.user = await User.findById(decode.id);
            next();
        } catch (error) {
            return next(
                new ErrorResponse("Not authorized to access this route", 401)
            );
        }
    }
);

/**
 * @name authorize
 * @description Authorize the access if user has permissions
 * @param {any} roles
 */
export const Authorize = (...roles: any) => {
    return (req: IReqUser, _res: Response, next: NextFunction) => {
        if (!roles.includes(req.user.role)) {
            return next(
                new ErrorResponse(
                    `User role ${req.user.role} is not authorized to access this route`,
                    403
                )
            );
            next();
        }
    };
};
