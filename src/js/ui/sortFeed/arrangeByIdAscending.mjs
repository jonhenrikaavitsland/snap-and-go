/**
 * Sorts the array in ascending order by the id of the posts in the array.
 * @param {array} array
 * @returns {array} sorted array
 */
export function arrangeByIdAscending(array) {
  array.sort((a, b) => a.id - b.id);
  return array;
}
