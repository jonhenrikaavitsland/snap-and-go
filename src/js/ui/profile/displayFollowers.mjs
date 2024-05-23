import { getFollowersAndFollowing } from "../../localStorage/getValue/getFollowInfo.mjs";
/**
 * Fetches and displays a list of followers for a specified user.
 *
 * This function retrieves the list of followers and following for the user by calling `getFollowersAndFollowing`.
 * It then dynamically creates and populates elements to display each follower in the `.content-container`. Each follower
 * is represented by their avatar, username, and a button to navigate to their profile page. This display includes a responsive
 * layout suitable for different screen sizes.
 *
 * @async
 * @param {Object} user - The user object containing the user's identification data used to fetch followers and following.
 * @returns {Promise<void>} A Promise that resolves when the followers have been displayed.
 */
export async function displayFollowers(user) {
  const { followers, following } = await getFollowersAndFollowing(user);
  const container = document.querySelector(".content-container");
  container.classList.add("col-12");
  container.classList.add("col-md-6");
  container.classList.remove("w-50");
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
