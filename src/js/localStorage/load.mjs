/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 * Retrieve a value from localStorage by supplying the key related to it.
 * @param {string} key
 * @returns {NumberLike} value stored under the key
 */

export function load(key) {
  return JSON.parse(localStorage.getItem(key));
}
