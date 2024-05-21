import { getProfileById } from "../../data/API/getProfileById.mjs";
import { getID } from "../../data/getID.mjs";
import { getUserSession } from "../../localStorage/session/getUserSession.mjs";
import { displayUserProfile } from "./displayUser.mjs";
import { displayCounts } from "../../ui/profile/counts/displayCounts.mjs";
import { displayPosts } from "./displayPosts.mjs";
import { followButton } from "./follow/followButton.mjs";
import { setupTabListeners } from "../../listener/tabListeners.mjs";
import { redirectToProfile } from "./redirectToProfile.mjs";
/**
 * Loads and displays a user's profile page based on the ID provided in the query string or the current session.
 *
 * This function first attempts to retrieve a user ID from the query string. If present, it fetches the profile
 * for that ID, displays the profile, counts, posts, and sets up interaction listeners. If no ID is found in the
 * query string, it defaults to the user ID from the current session, which is the logged in user. It then gives editing permissions
 * and then performs similar actions to fetch and display the user's details, counts, and posts.
 *
 * @async
 * @returns {Promise<void>} A Promise that resolves when all profile information has been loaded and displayed.
 */
export async function loadProfile() {
  const name = getID("name");
  let user;

  redirectToProfile();

  if (name) {
    user = await getProfileById(name);
    displayUserProfile(user, false);
    displayCounts(user);
    followButton(name);
    displayPosts(name);
    setupTabListeners(name);
  } else {
    const session = getUserSession();
    user = session.profile.name;
    const updatedUser = await getProfileById(user);
    displayUserProfile(updatedUser, true);
    displayCounts(updatedUser);
    displayPosts(user);
    setupTabListeners(user);
  }
}
