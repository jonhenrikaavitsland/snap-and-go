/**
 * Arranges the array by descending order, based off the posts id in the array.
 * @param {array} array
 * @returns {array} sorted array
 */
export function arrangeByIdDescending(array) {
  array.sort((a, b) => b.id - a.id);
  return array;
}
