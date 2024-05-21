import { load } from "../load.mjs";
/**
 * Retrieves the current user's session data from local storage.
 *
 * This function fetches and returns an object containing the user's authentication token and profile information.
 * The token and profile are stored in local storage, and this function abstracts the process
 * of accessing these values. It is used to manage user authentication state and profile data
 * throughout the application.
 *
 * @returns {{token: string, profile: Object}} An object containing the authentication token and profile data of the user.
 */
export function getUserSession() {
  return {
    token: load("token"),
    profile: load("profile"),
  };
}
