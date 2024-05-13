import { getFollowersAndFollowing } from "../../localStorage/getValue/getFollowInfo.mjs";

export async function displayFollowers(user) {
  const { followers, following } = await getFollowersAndFollowing(user);
  const container = document.querySelector(".content-container");
  container.classList.add("w-50");
  followers.forEach((follower) => {
    const row = document.createElement("div");
    const followerDiv = document.createElement("div");
    followerDiv.className = "col-12 d-flex align-items-center justify-content-between mb-2 border-top pt-2";
    row.className = "row";
    const img = document.createElement("img");
    img.src = follower.avatar.url;
    img.alt = `Profile image of ${follower.name}`;
    img.className = "mr-3 rounded-circle img-fluid border border-2 border-dark";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.objectFit = "cover";

    const username = document.createElement("span");
    username.textContent = "@" + follower.name;
    username.className = "flex-grow-1 text-center";

    const profileButton = document.createElement("a");
    profileButton.className = "btn btn-primary";
    profileButton.href = `/profile/?name=${follower.name}`;
    profileButton.textContent = "Go to Profile";

    followerDiv.append(img, username, profileButton);

    row.append(followerDiv);
    container.append(row);
  });
}
