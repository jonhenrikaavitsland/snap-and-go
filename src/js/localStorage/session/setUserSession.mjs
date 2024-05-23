import { save } from "../save.mjs";
/**
 * Stores the user's authentication token and profile information in local storage.
 *
 * This function is used to persist the user's session data by storing the authentication token and profile
 * information in local storage. It abstracts the calls to a local storage saving function, simplifying
 * the process of updating session data throughout the application. This is particularly useful for maintaining
 * user sessions across browser reloads and ensuring that user state is preserved.
 *
 * @param {string} token - The authentication token to be stored.
 * @param {Object} profile - The user profile data to be stored.
 */
export function setUserSession(token, profile) {
  save("token", token);
  save("profile", profile);
}
