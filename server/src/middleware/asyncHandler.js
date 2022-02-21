/**
 * @name asyncHandler
 * @description Function async to recive a function and return a promise try/catch
 * @param {*} fn
 * @returns Promise
 */
const asyncHandler = (fn) => (req, res, next) => {
    return Promise.resolve(fn(req, res, next)).catch(next);
};

export default asyncHandler;
