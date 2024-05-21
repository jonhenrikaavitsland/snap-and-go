import { apiFollowFunction } from "./followFunction.mjs";
import { save } from "../../../localStorage/save.mjs";
import { updateFollowButton } from "./updateButton.mjs";
/**
 * Initializes and sets up the follow button for a specific user profile.
 *
 * This function selects the follow button from the DOM, updates its state based on the provided profile name,
 * and sets up an event listener for click events. When clicked, the function checks the current state of the
 * button (Follow or Unfollow), performs the appropriate API call via `apiFollowFunction`, and updates the
 * local storage with the new counts of followers and following. Errors during API calls are caught and logged.
 *
 * @param {string} profileName - The name of the profile associated with the follow button.
 */
export async function followButton(profileName) {
  const button = document.querySelector(".follow-button");

  updateFollowButton(profileName, button);
  button.addEventListener("click", async () => {
    const action = button.textContent === "Follow" ? "follow" : "unfollow";

    try {
      const result = await apiFollowFunction(action, profileName);
      save("following", result.data.following);
      save("followers", result.data.followers);

      updateFollowButton(profileName, button);
    } catch (error) {
      console.error("Error: ", error);
    }
  });
}
