/**
 * Check a password to ensure there is no special characters and that it meets the requirement of minimum 8 characters.
 * @param {string} passwordRegex
 * @returns true or false
 */
export function sanitizePassword(passwordRegex) {
  const passwordField = document.querySelector("#inputPassword");
  const passwordError = document.querySelector(".invalid-feedback-pw");
  const passwordValid = document.querySelector(".valid-feedback-pw");
  let validState = false;

  if (passwordField.value.trim() !== "" && !passwordRegex.test(passwordField.value.trim())) {
    passwordValid.style.display = "none";
    passwordError.style.display = "block";
    validState = false;
  } else {
    passwordError.style.display = "none";
    passwordValid.style.display = "block";
    validState = true;
  }
  if (passwordField.value.trim() !== "" && passwordField.value.trim().length < 8) {
    passwordValid.style.display = "none";
    passwordError.style.display = "block";
    validState = false;
  }
  if (passwordField.value.trim() === "") {
    passwordValid.style.display = "none";
    validState = false;
  }
  return validState;
}
