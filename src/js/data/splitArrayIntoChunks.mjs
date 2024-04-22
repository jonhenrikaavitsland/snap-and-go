/**
 * A function to split an array into smaller arrays
 * @param {array} array
 * @param {number} chunkSize
 * @returns a new array that contains a number of arrays, where each array only contains the chunksize of items.
 */
export function splitArrayIntoChunks(array, chunkSize) {
  return array.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);
    return result;
  }, []);
}
