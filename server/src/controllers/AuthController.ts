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
            name: email,
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

            SendTokenResponse(user, 201, res);
        } catch (error) {
            console.error(error);

            return next(new ErrorResponse(`Email could not be sent`, 500));
        }
    }
);

/**
 * @name SignIn
 * @description Login into the app
 * @route POST /api/v1/auth/signin
 * @access Public
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void | Response<object>>} object
 */
export const SignIn = AsyncHandler(
    async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Response<object>> => {
        const { email, password } = req.body;

        if (!email || !password) {
            return next(
                new ErrorResponse("Please provide an email and password", 400)
            );
        }

        const user = await User.findOne({ email }).select("+password");
        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        SendTokenResponse(user, 201, res);
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
