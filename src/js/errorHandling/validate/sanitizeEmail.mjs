/**
 * This function will test if an email matches a valid email format.
 * The function should only accept emails that are specific to Noroff.
 * @param {string} email
 * @returns a trimmed email if successful and null if not successful
 */
export function sanitizeEmail(email) {
  const emailRegex = /^[^\s@]+@(noroff\.no|stud\.noroff\.no)$/i;

  if (emailRegex.test(email)) {
    return email.trim();
  } else {
    return null;
  }
}
