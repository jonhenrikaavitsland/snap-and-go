import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS, API_PROFILES } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * Function is used to get posts from one single user.
 * @param {string} author - name/id of the author
 * @returns {array} of posts by the single user
 */
export async function getPostsWithAuthor(author) {
  const posts = await fetchData(`${API_BASE}${API_PROFILES}/${author}/posts`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return posts;
}
