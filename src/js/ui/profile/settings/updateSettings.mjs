import { API_BASE, API_PROFILES, API_KEY } from "../../../data/API/constants.mjs";
import { fetchData } from "../../../data/API/fetch.mjs";
import { load } from "../../../localStorage/load.mjs";
/**
 * Sends updated settings for a specific user profile to the server.
 *
 * This function constructs a URL using the base API path and the profile name, then makes a
 * PUT request to update the user's settings on the server. The request includes headers for content type,
 * authorization, and an API key. This function is used to update user profiles
 * with data provided in various forms such as bio and avatar settings.
 *
 * @async
 * @param {string} profileName - The name of the user profile being updated.
 * @param {Object} formData - The form data containing new settings for the user, structured as an object.
 * @returns {Promise<Object>} The server's response to the update request.
 */
export async function updateSettings(profileName, formData) {
  console.log("typeof formData: ", typeof formData);
  console.log("typeof formData: ", typeof JSON.stringify(formData));
  const response = await fetchData(`${API_BASE}${API_PROFILES}/${profileName}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
    body: JSON.stringify(formData),
  });
  console.log("it stop here");
  console.log(response);
  return response;
}
