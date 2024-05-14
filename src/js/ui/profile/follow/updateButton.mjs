import { load } from "../../../../../../../../../../../../../src/js/localStorage/load.mjs";

export function updateFollowButton(profileName, button) {
  const following = load("following") || [];
  const isFollowing = following.some((profile) => profile.name === profileName);

  button.textContent = isFollowing ? "Unfollow" : "Follow";
  button.classList.toggle("btn-primary", !isFollowing);
  button.classList.toggle("btn-secondary", isFollowing);
}
