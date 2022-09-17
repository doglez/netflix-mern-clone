import { CookieOptions, NextFunction, Request, Response } from "express";
import { CORS_ADMIT_URL, JWT_COOKIE_EXPIRE, NODE_ENV } from "../config/Config";
import { IReqUser } from "../interfaces/Interfaces";
import AsyncHandler from "../middleware/AsyncHandler";
import Token from "../models/Token";
import User, { IUser } from "../models/User";
import ErrorResponse from "../utiles/ErrorResponse";
import SendEmails from "../utiles/SendEmails";
import crypto from "crypto";

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
 * @name SignOut
 * @description Log out into the app
 * @route GET /api/v1/auth/signout
 * @access Private
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<Response<object>>} object
 */
export const SignOut = AsyncHandler(
    async (
        req: IReqUser,
        res: Response,
        _next: NextFunction
    ): Promise<Response<object>> => {
        const barearTokenReq = req.headers.authorization;
        const tokenHeader = barearTokenReq?.split(" ")[1];

        const tokenFind: any = await Token.findOne({
            user: req.user.id,
            token: tokenHeader,
        });

        tokenFind.status = "disable";
        await tokenFind.save();

        return res
            .status(200)
            .cookie("token", "none", {
                expires: new Date(Date.now() + 10 * 1000),
            })
            .json({
                status: true,
            });
    }
);

/**
 * @name GetMe
 * @description Get my own info
 * @route GET /api/v1/auth/me
 * @access Private
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise< Response<object>>} object
 */
export const GetMe = AsyncHandler(
    async (
        req: IReqUser,
        res: Response,
        _next: NextFunction
    ): Promise<Response<object>> => {
        const user = await User.findById(req.user.id);

        return res.status(200).json({
            data: user,
        });
    }
);

/**
 * @name UpdateMe
 * @description Update my own info
 * @route PUT /api/v1/auth/updateme
 * @access Private
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise< Response<object>>} object
 */
export const UpdateMe = AsyncHandler(
    async (
        req: IReqUser,
        res: Response,
        _next: NextFunction
    ): Promise<Response<object>> => {
        const { name } = req.body;

        const user = await User.findByIdAndUpdate(
            req.user.id,
            {
                name,
            },
            { new: true, runValidators: true }
        );

        return res.status(200).json({
            data: user,
        });
    }
);

/**
 * @name UpdatePass
 * @description Update my own password
 * @route PUT /api/v1/auth/updatepass
 * @access Private
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void | Response<object>>} object
 */
export const UpdatePass = AsyncHandler(
    async (
        req: IReqUser,
        res: Response,
        next: NextFunction
    ): Promise<void | Response<object>> => {
        const { currentPassword, newPassword, passwordConfirm } = req.body;

        if (!currentPassword || !newPassword || !passwordConfirm) {
            return next(
                new ErrorResponse(
                    "Current password, new password and password confirmation are required",
                    400
                )
            );
        }

        if (newPassword !== passwordConfirm) {
            return next(new ErrorResponse("Passwords must match", 400));
        }

        const user: any = await User.findById(req.user.id).select("+password");

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401));
        }

        const isNotMatch = await user.matchPassword(newPassword);
        if (isNotMatch) {
            return next(
                new ErrorResponse(
                    "The current password cannot be the same as the new password",
                    401
                )
            );
        }

        user.password = newPassword;
        await user.save();

        const text = `Your password has been updated.`;

        try {
            await SendEmails({
                email: user.email,
                subject: "Password updates",
                text,
            });

            return res.status(200).json({
                data: "Password updates",
            });
        } catch (error) {
            console.error(error);

            return next(new ErrorResponse(`Email could not be sent`, 500));
        }
    }
);

/**
 * @name ForgotPass
 * @description Update my own info
 * @route POST /api/v1/auth/forgotpassword
 * @access Public
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void | Response<object>>} object
 */
export const ForgotPass = AsyncHandler(
    async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Response<object>> => {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return next(new ErrorResponse(`You are not a user yet`, 404));
        }

        const resetToken = user.getResetPasswordToken();

        await user.save({ validateBeforeSave: false });

        const resetUrl = `${CORS_ADMIT_URL}/forgotpassword/${resetToken}`;

        const text = `You are receiving this email because you (or someone else) has requested the reset of password. Please make a PUT request to:\n\n${resetUrl}`;

        try {
            await SendEmails({
                email: user.email,
                subject: "Password reset token",
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
 * @name ResetPass
 * @description Update my own password
 * @route PUT /api/v1/auth/resetpassword/:resettoken
 * @access Public
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise<void | Response<object>>} object
 */
export const ResetPass = AsyncHandler(
    async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void | Response<object>> => {
        const { password, passwordConfirm } = req.body;

        if (!password || !passwordConfirm) {
            return next(
                new ErrorResponse(
                    "Password and password confirmation are required",
                    400
                )
            );
        }

        if (password !== passwordConfirm) {
            return next(new ErrorResponse("Passwords must match", 400));
        }

        const resetPasswordToken = crypto
            .createHash("sha256")
            .update(req.params.resettoken)
            .digest("hex");

        const user: any = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire: { $gt: Date.now() },
        }).select("+password");

        if (!user) {
            return next(new ErrorResponse("Invalid token", 400));
        }

        console.log("first");
        const isNotMatch = await user.matchPassword(password);
        if (isNotMatch) {
            return next(
                new ErrorResponse(
                    "The new password cannot be the same as the current password",
                    401
                )
            );
        }

        user.password = password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save();

        const text = `Your password has been updated.`;

        try {
            await SendEmails({
                email: user.email,
                subject: "Password updates",
                text,
            });

            return res.status(200).json({
                data: "Password updates",
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
