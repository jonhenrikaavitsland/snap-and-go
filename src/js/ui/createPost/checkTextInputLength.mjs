export function checkTextInputLength(input, length) {
  if (input.length > length) {
    alert(`Text exceeds the ${length} characters limit.`);
    return;
  }
}
