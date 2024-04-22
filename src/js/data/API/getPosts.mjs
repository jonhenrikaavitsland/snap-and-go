import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * A function that sends requests to the API
 * @returns API response
 */
export async function getPosts() {
  const posts = await fetchData(`${API_BASE}${API_POSTS}`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return posts;
}