/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * This function will test if the provided password does not contain any special characters.
 * @param {NumberLike} password
 * @returns a trimmed password if successful and null if not successful
 */
export function sanitizePassword(password) {
  const passwordRegex = /^[a-zA-Z0-9]*$/;

  if (passwordRegex.test(password)) {
    return password.trim();
  } else {
    return null;
  }
}
