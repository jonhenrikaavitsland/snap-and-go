/**
 * validates email input and displays correct informational message on screen.
 * @param {string} emailRegex
 * @returns true or false
 */
export function sanitizeEmail(emailRegex) {
  const emailField = document.querySelector("#inputEmail");
  const emailError = document.querySelector(".invalid-feedback-email");
  const emailValid = document.querySelector(".valid-feedback-email");
  let validState = false;

  if (emailField.value.trim() !== "" && !emailRegex.test(emailField.value.trim())) {
    emailValid.style.display = "none";
    emailError.style.display = "block";
    validState = false;
  } else {
    emailError.style.display = "none";
    emailValid.style.display = "block";
    validState = true;
  }
  if (emailField.value.trim() === "") {
    emailValid.style.display = "none";
    validState = false;
  }
  return validState;
}
