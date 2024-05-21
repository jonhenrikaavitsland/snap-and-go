import { fetchData } from "../../../data/API/fetch.mjs";
import { API_BASE, API_PROFILES, API_KEY } from "../../../data/API/constants.mjs";
import { load } from "../../../localStorage/load.mjs";
/**
 * Executes an API request to follow or unfollow a user profile.
 *
 * This function constructs a URL using the base API path, profile name, and action ("follow" or "unfollow").
 * It makes a PUT request to the server with necessary headers including authorization and API key.
 * The response from the server is then returned.
 *
 * @param {string} action - The action to be performed, either "follow" or "unfollow".
 * @param {string} profileName - The profile name on which the action is to be performed.
 * @returns {Promise<Object>} The response object from the server after performing the follow/unfollow action.
 */
export async function apiFollowFunction(action, profileName) {
  const response = await fetchData(`${API_BASE}${API_PROFILES}/${profileName}/${action}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return response;
}
