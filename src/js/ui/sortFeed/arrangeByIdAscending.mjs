export function arrangeByIdAscending(array) {
  array.sort((a, b) => a.id - b.id);
  return array;
}
