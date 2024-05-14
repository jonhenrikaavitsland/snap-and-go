import { displayFollowers } from "../displayFollowers.mjs";
import { displayPosts } from "../displayPosts.mjs";
import { displayFollowing } from "../displayFollowing.mjs";
import { displayDetails } from "../settings/displayDetails.mjs";
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
      // something
      break;
    case "details-tab":
      displayDetails();
      break;
  }
}
