import JsonWebTokenError from "jsonwebtoken";
import config from "../config/config.js";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";
import ErrorResponse from "../utilis/ErrorResponse.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utilis/sendEmail.js";
import crypto from "crypto";

/**
 * @name register
 * @description Register a user in database
 * @route POST /api/v1/auth/register
 * @access Public
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const register = asyncHandler(async (req, res, next) => {
    const { name, email, phone, password, passwordConfirm } = req.body;

    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!password) {
        return next(new ErrorResponse("Must enter a password", 400));
    }

    if (password !== passwordConfirm) {
        return next(new ErrorResponse("Password do not match", 400));
    }

    if (!password.match(regExp)) {
        return next(
            new ErrorResponse(
                "Password should contain at least one number and one special character and must be between 6 and 16 characters",
                400
            )
        );
    }

    const user = await User.create({
        name,
        email,
        phone,
        password,
    });

    return sendTokenResponse(user, 201, res);
});

/**
 * @name login
 * @description Login a user in database
 * @route POST /api/v1/auth/login
 * @access Public
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(
            new ErrorResponse("Please provide an email and password", 400)
        );
    }

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorResponse("Invalid credentials", 400));
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials", 400));
    }

    return sendTokenResponse(user, 200, res);
});

/**
 * @name logout
 * @description Logout a user from the app
 * @route GET /api/v1/auth/logout
 * @access Private
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const logout = asyncHandler(async (req, res, next) => {
    res.cookie("token", "none", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    return res.status(200).json({
        success: true,
    });
});

/**
 * @name forgotPass
 * @description Send email to recovery password
 * @route POST /api/v1/auth/forgotpassword
 * @access Public
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const forgotPass = asyncHandler(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorResponse("There is no user with this email", 404));
    }

    // Get reset toke
    const resetToken = user.getResetPassToken();

    await user.save({ validateBeforeSave: false });

    // Create reset url
    const resetUrl = `${req.protocol}://${req.get(
        "host"
    )}/api/v1/resetpassword/${resetToken}`;

    const message = `Dear ${user.name} you are reciving this email beacause you (or some else) has requested the reset of password. Please make a PUT request to:\n\n${resetUrl}`;

    try {
        await sendEmail({
            email: user.email,
            subject: "Password reset token",
            message,
        });

        res.status(200).json({
            success: true,
            data: "Email sent",
        });
    } catch (error) {
        console.error(error);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorResponse("Email could not be sent", 500));
    }
});
/**
 * @name resetPass
 * @description Reset password
 * @route PUT /api/v1/auth/resetpassword/:resettoken
 * @access Public
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const resetPass = asyncHandler(async (req, res, next) => {
    // Get hashed token
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.resettoken)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
        return next(new ErrorResponse(`Invalid token`, 400));
    }

    const { password, passwordConfirm } = req.body;

    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!password) {
        return next(new ErrorResponse("Must enter a password", 400));
    }

    if (password !== passwordConfirm) {
        return next(new ErrorResponse("Password do not match", 400));
    }

    if (!password.match(regExp)) {
        return next(
            new ErrorResponse(
                "Password should contain at least one number and one special character and must be between 6 and 16 characters",
                400
            )
        );
    }

    // Set new password
    user.password = password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    return sendTokenResponse(user, 200, res);
});

/**
 * @name meInfo
 * @description Get information about me
 * @route GET /api/v1/auth/me
 * @access Private
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const meInfo = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    return res.status(200).json({
        success: true,
        data: user,
    });
});

/**
 * @name updateMe
 * @description Update information about me
 * @route PUT /api/v1/auth/updateme
 * @access Private
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const updateMe = asyncHandler(async (req, res, next) => {
    let user = await User.findById(req.user.id);

    if (!user) {
        return next(
            new ErrorResponse(`User not found with id ${req.user.id}`, 400)
        );
    }

    user = await User.findByIdAndUpdate(user.id, req.body, {
        new: true,
        runValidators: true,
    });

    return res.status(200).json({
        success: true,
        data: user,
    });
});

/**
 * @name updatePass
 * @description Update password about me
 * @route PUT /api/v1/auth/updatepass
 * @access Private
 * @param req
 * @param res
 * @param next
 * @returns Void
 */
export const updatePass = asyncHandler(async (req, res, next) => {
    let user = await User.findById(req.user.id);

    if (!user) {
        return next(
            new ErrorResponse(`User not found with id ${req.user.id}`, 400)
        );
    }

    const { password, passwordConfirm } = req.body;

    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (!password) {
        return next(new ErrorResponse("Must enter a password", 400));
    }

    if (password !== passwordConfirm) {
        return next(new ErrorResponse("Password do not match", 400));
    }

    if (!password.match(regExp)) {
        return next(
            new ErrorResponse(
                "Password should contain at least one number and one special character and must be between 6 and 16 characters",
                400
            )
        );
    }

    // Set new password
    user.password = password;
    await user.save();

    const message = `Dear ${user.name} you are reciving this email beacause you (or some else) has reset your password.`;

    try {
        await sendEmail({
            email: user.email,
            subject: "Password Reset",
            message,
        });

        res.status(200).json({
            success: true,
            data: "Email sent",
        });
    } catch (error) {
        console.error(error);

        return next(new ErrorResponse("Email could not be sent", 500));
    }
});

/**
 * @name sendTokenResponse
 * @description Create a token to log in
 * @param user
 * @param statusCode
 * @param res
 * @returns Response
 */
const sendTokenResponse = async (user, statusCode, res) => {
    // Create token
    const token = JsonWebTokenError.sign({ id: user.id }, config.JWT_SECRET, {
        expiresIn: config.JWT_EXPIRE,
    });

    const options = {
        expires: new Date(
            Date.now() + config.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: false,
    };

    if (config.NODE_ENV === "production") {
        options.secure = true;
    }

    return res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token,
    });
};
