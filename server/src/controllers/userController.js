import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/User.js";
import ErrorResponse from "../utilis/ErrorResponse.js";

/**
 * @name index
 * @description Get all users
 * @route GET /api/v1/users
 * @access Private/Admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns Response
 */
export const index = asyncHandler(async (req, res, next) => {
    return res.status(200).json(res.advancedResults);
});

/**
 * @name show
 * @description Get just one user by Id
 * @route GET /api/v1/users/:id
 * @access Private/Admin
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const show = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorResponse(`User not found with id ${req.params.id}`, 400)
        );
    }

    return res.status(200).json({
        success: true,
        data: user,
    });
});

/**
 * @name update
 * @description Update a user by Id
 * @route PUT /api/v1/users/:id
 * @access Private/Admin
 * @param req
 * @param res
 * @param next
 * @returns Promise
 */
export const update = asyncHandler(async (req, res, next) => {
    let user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorResponse(`User not found with id ${req.params.id}`, 400)
        );
    }

    user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    return res.status(200).json({
        success: true,
        data: user,
    });
});

/**
 * @name destroy
 * @description Delete a user by Id
 * @route Delete /api/v1/users/:id
 * @access Private/Admin
 * @param req
 * @param res
 * @param next
 * @returns Response
 */
export const destroy = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (!user) {
        return next(
            new ErrorResponse(`User not found with id ${req.params.id}`, 400)
        );
    }

    await user.remove();

    return res.status(200).json({
        success: true,
    });
});
