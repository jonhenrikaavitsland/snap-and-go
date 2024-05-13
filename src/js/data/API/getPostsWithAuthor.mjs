import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS, API_PROFILES } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

export async function getPostsWithAuthor(author) {
  const posts = await fetchData(`${API_BASE}${API_PROFILES}/${author}/posts`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  console.log(`${API_BASE}${API_PROFILES}/${author}${API_POSTS}`);
  console.log("This is the author: ", author);
  console.log("This is the posts: ", posts);
  return posts;
}
