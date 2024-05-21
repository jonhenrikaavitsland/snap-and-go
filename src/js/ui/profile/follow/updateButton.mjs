import { load } from "../../../../../../../../../../../../../src/js/localStorage/load.mjs";
/**
 * Updates the text and style of the follow button based on the following status of a profile.
 *
 * This function checks if the user is currently following the specified profile by loading the list
 * of followed profiles from local storage and searching for the profile name. It then updates the
 * button text to "Follow" or "Unfollow" based on whether the user is following the profile or not.
 * Additionally, it toggles the button's CSS classes to reflect the appropriate style for the action
 * (primary for follow, secondary for unfollow).
 *
 * @param {string} profileName - The name of the profile related to the follow button.
 * @param {HTMLElement} button - The button element to be updated.
 */
export function updateFollowButton(profileName, button) {
  const following = load("following") || [];
  const isFollowing = following.some((profile) => profile.name === profileName);

  button.textContent = isFollowing ? "Unfollow" : "Follow";
  button.classList.toggle("btn-primary", !isFollowing);
  button.classList.toggle("btn-secondary", isFollowing);
}
