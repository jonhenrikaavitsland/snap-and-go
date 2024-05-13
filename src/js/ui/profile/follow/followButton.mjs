import { apiFollowFunction } from "./followFunction.mjs";
import { save } from "../../../localStorage/save.mjs";
import { updateFollowButton } from "./updateButton.mjs";
export async function followButton(profileName) {
  const button = document.querySelector(".follow-button");

  updateFollowButton(profileName, button);
  button.addEventListener("click", async () => {
    const action = button.textContent === "Follow" ? "follow" : "unfollow";

    try {
      const result = await apiFollowFunction(action, profileName);
      console.log("This is the result: ", result);
      save("following", result.data.following);
      save("followers", result.data.followers);

      updateFollowButton(profileName, button);
    } catch (error) {
      console.error("Error: ", error);
    }
  });
}
