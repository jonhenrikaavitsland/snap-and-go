import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * Get a post by sending a GET request to the API.
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Object} The post data from the API.
 */

export async function getPost(id) {
  const url = `${API_BASE}${API_POSTS}/${id}?_reactions=true`;
  const post = await fetchData(url, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return post;
}

