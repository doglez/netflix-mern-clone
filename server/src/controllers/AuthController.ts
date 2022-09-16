import { CookieOptions, NextFunction, Request, Response } from "express";
import { JWT_COOKIE_EXPIRE, NODE_ENV } from "../config/Config";
import AsyncHandler from "../middleware/AsyncHandler";
import Token from "../models/Token";
import User, { IUser } from "../models/User";
import ErrorResponse from "../utiles/ErrorResponse";
import SendEmails from "../utiles/SendEmails";

/**
 * @name SignUp
 * @description Register a user
 * @route POST /api/v1/auth/signup
 * @access Public
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void | Response<object>>} object
 */
export const SignUp = AsyncHandler(
    async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Response<object>> => {
        const { email, password, passwordConfirm } = req.body;

        if (password != passwordConfirm) {
            return next(new ErrorResponse("Passwords must match", 400));
        }

        const user = await User.create({
            email,
            password,
        });

        const text = `You are receiving this email because you (or another person) have registered you is Dogflex.`;

        try {
            await SendEmails({
                email: user.email,
                subject: "Account registered successfully",
                text,
            });

            return res.status(200).json({
                data: "Email sent",
            });
        } catch (error) {
            console.error(error);

            return next(new ErrorResponse(`Email could not be sent`, 500));
        }
    }
);

/**
 * @name sendTokenResponse
 * @description Get token from model and create cookie
 * @param {IUser} user
 * @param {Number} statusCode
 * @param {Response} res
 * @returns {Response<object>} object
 */
const SendTokenResponse = (
    user: IUser,
    statusCode: number,
    res: Response
): Response<object> => {
    const token = user.getSignedJwtToken();

    const options: CookieOptions = {
        expires: new Date(Date.now() + JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };

    if (NODE_ENV === "production") {
        options.secure = true;
    }

    Token.create({
        user: user.id,
        token,
    });

    return res.status(statusCode).cookie("token", token, options).json({
        token,
    });
};
