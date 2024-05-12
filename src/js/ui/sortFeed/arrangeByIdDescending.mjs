export function arrangeByIdDescending(array) {
  array.sort((a, b) => b.id - a.id);
  return array;
}
