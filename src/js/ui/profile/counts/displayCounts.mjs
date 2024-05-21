import { getCountsProfile } from "../../../localStorage/getValue/getCount.mjs";
import { editingProfileCounts } from "./profileCounts.mjs";
/**
 * Displays the count of followers, posts, and following for a specified user.
 *
 * This function retrieves the counts from the user's profile using the `getCountsProfile` function,
 * then updates the user's profile with these counts using the `editingProfileCounts` function.
 *
 * @param {Object} user - The user object for which profile counts are to be displayed.
 */
export function displayCounts(user) {
  const { followers, posts, following } = getCountsProfile(user);
  editingProfileCounts(followers, posts, following);
}
