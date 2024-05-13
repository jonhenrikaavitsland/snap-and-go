import { getFollowersAndFollowing } from "../../localStorage/getValue/getFollowInfo.mjs";

export async function displayFollowing(user) {
  const { followers, following } = await getFollowersAndFollowing(user);
  const container = document.querySelector(".content-container");

  following.forEach((follow) => {
    const followElement = document.createElement("div");
    followElement.textContent = follow.name;
    container.append(followElement);
  });
}
