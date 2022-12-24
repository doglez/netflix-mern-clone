import { NODE_ENV } from "../config/Config";

/**
 * @name consoleLog
 * @description Allows printing in console in development mode
 * @param {any} print content that need to print in console
 * @returns {void} void
 */
export const consoleLog = (print: any): void => {
    if (NODE_ENV === "development") {
        console.log(print);
    }
};

/**
 * @name consoleErr
 * @description Allows printing error in console in development mode
 * @param {any} print content that need to print in console
 * @returns {void} void
 */
export const consoleErr = (print: any): void => {
    if (NODE_ENV === "development") {
        console.error(print);
    }
};
