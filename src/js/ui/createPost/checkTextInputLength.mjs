/**
 * A function to check if input value is too long.
 * @param {object} input
 * @param {number} length
 * @returns alert if limit was reached!
 */
export function checkTextInputLength(input, length) {
  if (input.length > length) {
    alert(`Text exceeds the ${length} characters limit.`);
    return;
  }
}
