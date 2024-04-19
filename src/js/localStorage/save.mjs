/**
 * Number or string containing number
 * @typedef {(number|string)} NumberLike
 */

/**
 *Store a value in localStorage under a set key
 * @param {string} key
 * @param {NumberLike} value
 */

export function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
