/**
 * This function checks input length and returns visible information on the screen.
 */
export function checkTextInputLength() {
  const textarea = document.querySelector("#textareaControl");
  const charCount = document.querySelector(".char-count");
  
  textarea.addEventListener("input", function () {
    const textLength = textarea.value.length;
    charCount.textContent = textLength + "/150";
  });
}
