import { sanitizeEmail } from "./sanitizeEmail.mjs";
import { sanitizePassword } from "./sanitizePassword.mjs";

/**
 * Checks if validation has been successful
 * @returns true or false
 */
export function validateUser() {
  const emailRegex = /^[^\s@]+@(noroff\.no|stud\.noroff\.no)$/i;
  const passwordRegex = /^[a-zA-Z0-9]*$/;

  let validState;

  const validStateEmail = sanitizeEmail(emailRegex);
  const validStatePassword = sanitizePassword(passwordRegex);

  if (validStateEmail && validStatePassword) {
    validState = true;
  } else {
    validState = false;
  }
  return validState;
}
