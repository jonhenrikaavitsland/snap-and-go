export function checkTextInputLength(input, length) {
  if (input.length > length) {
    alert("Text exceeds the 150 characters limit.");
    return;
  }
}
