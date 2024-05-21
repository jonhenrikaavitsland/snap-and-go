import { displayFollowers } from "../displayFollowers.mjs";
import { displayPosts } from "../displayPosts.mjs";
import { displayFollowing } from "../displayFollowing.mjs";
import { displayDetails } from "../settings/displayDetails.mjs";
import { displayAvatars } from "../settings/avatarSelection.mjs";
/**
 * Updates the content displayed in the main content container based on the active tab selected.
 *
 * This function first clears any existing content within the designated content container. It then
 * checks the active tab ID and calls the appropriate function to display content relevant to that tab.
 * Available tabs include options for displaying followers, posts, following details, avatars, and user
 * details, each leveraging a corresponding function to render the content for the respective tab.
 *
 * @param {string} activeTabId - The ID of the currently active tab, determining the type of content to display.
 * @param {Object} user - The user object containing necessary data to fetch and display content for followers,
 *                        posts, and following tabs. Not required for avatar and details tabs.
 */
export function updateContent(activeTabId, user) {
  const contentContainer = document.querySelector(".content-container");
  contentContainer.innerHTML = "";

  switch (activeTabId) {
    case "followers-tab":
      displayFollowers(user);
      break;
    case "posts-tab":
      displayPosts(user);
      break;
    case "following-tab":
      displayFollowing(user);
      break;
    case "avatar-tab":
      displayAvatars();
      break;
    case "details-tab":
      displayDetails();
      break;
  }
}
