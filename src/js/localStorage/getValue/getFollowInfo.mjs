import { API_BASE, API_KEY, API_PROFILES } from "../../data/API/constants.mjs";
import { fetchData } from "../../data/API/fetch.mjs";
import { load } from "../load.mjs";

/**
 * Fetches and returns the lists of followers and following for a specified user from an API.
 *
 * This function constructs a URL to request the followers and following data for a user profile
 * based on the provided username. It makes an HTTP GET request to the API with authentication
 * headers.
 *
 * @async
 * @param {string} name - The username of the profile whose followers and following data is to be retrieved.
 * @returns {Promise<{followers: Array, following: Array}>} A Promise that resolves to an object containing
 *          arrays of followers and following data.
 */
export async function getFollowersAndFollowing(name) {
  const information = await fetchData(`${API_BASE}${API_PROFILES}/${name}/?_following=true&_followers=true`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  console.log("this is information from the _following=true url: ", information.data.following);
  console.log("this is information from the _followers=true url: ", information.data.followers);
  console.log("this is information from the _followers=true url: ", information);

  const followers = information.data.followers;
  const following = information.data.following;
  return { followers, following };
}
