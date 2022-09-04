import { NextFunction, Request, Response } from "express";

/**
 * @name AsyncHandler
 * @description Asynchronous function, receives a function and returns a promise (try/catch)
 * @param {any} fn
 * @returns {Promise} promise
 */
const AsyncHandler =
    (fn: any) => (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

export default AsyncHandler;
