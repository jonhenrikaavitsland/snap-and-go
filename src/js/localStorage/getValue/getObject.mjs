import { load } from "../load.mjs";

/**
 * Retrieves the user profile object from storage.
 *
 * This function fetches the user's profile data by calling `load` with the key "profile".
 * It returns the retrieved object.
 *
 * @returns {Object} The user profile object loaded from storage.
 */
export function getObject() {
  const object = load("profile");
  return object;
}
