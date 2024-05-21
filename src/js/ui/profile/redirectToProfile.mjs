import { getID } from "../../data/getID.mjs";
import { getObject } from "../../localStorage/getValue/getObject.mjs";

/**
 * Redirects the user to their personal profile page if the username in the URL matches the username in local storage.
 *
 * This function retrieves the username from the URL query parameter "name" and compares it with the username
 * stored in the local storage or session state. If these usernames match, it implies that the user is attempting
 * to view their own profile, and the function redirects them to their standard profile page URL with editing permissions.
 *
 * @function redirectToProfile
 */
export function redirectToProfile() {
  const urlUsername = getID("name");

  const user = getObject();
  const loggedInUsername = user.name;

  if (urlUsername === loggedInUsername) {
    window.location.href = "/profile/";
  }
}
