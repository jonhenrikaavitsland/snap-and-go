/**
 * Updates the display elements for followers, posts, and following counts on the user profile page.
 *
 * This function selects HTML elements based on their class names and updates their text content
 * with the provided values for followers, posts, and following counts.
 *
 * @param {number} followers - The number of followers to display.
 * @param {number} posts - The number of posts to display.
 * @param {number} following - The number of users being followed to display.
 */
export function editingProfileCounts(followers, posts, following) {
  const followersCount = document.querySelector(".followers-count");
  const postsCount = document.querySelector(".posts-count");
  const followingCount = document.querySelector(".following-count");

  followersCount.textContent = followers;
  postsCount.textContent = posts;
  followingCount.textContent = following;
}
