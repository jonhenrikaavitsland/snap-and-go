import { ERROR_API, ERROR_API_400, ERROR_API_401 } from "./errors.mjs";

/**
 * This function takes in an error status code and returns a new error response that fits the error status.
 * @param {string} error 
 * @returns {variable} a pre-defined error
 * @example
 * ```js
 * // receive error code and return correct error
 * error === 400;
 * return new Error("Bad request, please ensure that your inputs are correct.");
 * // The returned error is passed as a variable
 * ```
 */
export function errorRouter(error) {
  switch (error) {
    case 400:
      return ERROR_API_400;
    case 401:
      return ERROR_API_401;
    default:
      return ERROR_API;
  }
}
