export function editingProfileCounts(followers, posts, following) {
  const followersCount = document.querySelector(".followers-count");
  const postsCount = document.querySelector(".posts-count");
  const followingCount = document.querySelector(".following-count");

  followersCount.textContent = followers;
  postsCount.textContent = posts;
  followingCount.textContent = following;
}
