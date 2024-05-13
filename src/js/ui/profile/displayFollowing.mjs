import { getFollowersAndFollowing } from "../../localStorage/getValue/getFollowInfo.mjs";

export async function displayFollowing(user) {
  const { followers, following } = await getFollowersAndFollowing(user);
  const container = document.querySelector(".content-container");
  container.classList.add("w-50");

  following.forEach((follow) => {
    const row = document.createElement("div");
    const followDiv = document.createElement("div");
    followDiv.className = "col-12 d-flex align-items-center justify-content-between mb-2 border-top pt-2";
    row.className = "row";
    const img = document.createElement("img");
    img.src = follow.avatar.url;
    img.alt = `Profile image of ${follow.name}`;
    img.className = "mr-3 rounded-circle img-fluid border border-2 border-dark";
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.objectFit = "cover";

    const username = document.createElement("span");
    username.textContent = "@" + follow.name;
    username.className = "flex-grow-1 text-center";

    const profileButton = document.createElement("a");
    profileButton.className = "btn btn-primary";
    profileButton.href = `/profile/?name=${follow.name}`;
    profileButton.textContent = "Go to Profile";

    followDiv.append(img, username, profileButton);

    row.append(followDiv);
    container.append(row);
  });
}
