/**
 * Checks if password and repeat password is matching
 * @returns returns true if both matches, otherwise returns false!
 */
export function passwordsMatch() {
  const password = document.querySelector("#inputPassword");
  const passwordRepeat = document.querySelector("#inputRepeatPassword");
  const passwordMatchError = document.querySelector(".invalid-feedback-pw-match");
  const passwordMatchValid = document.querySelector(".valid-feedback-pw-match");
  let validState = false;

  if (passwordRepeat.value.trim() !== "" && password.value.trim() !== passwordRepeat.value.trim()) {
    passwordMatchValid.style.display = "none";
    passwordMatchError.style.display = "block";
    validState = false;
  } else {
    passwordMatchError.style.display = "none";
    passwordMatchValid.style.display = "block";
    validState = true;
  }
  if (passwordRepeat.value.trim() === "") {
    passwordMatchValid.style.display = "none";
    validState = false;
  }
  return validState;
}
