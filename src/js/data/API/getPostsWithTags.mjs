import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * This function retrieves all posts from the API and then filters out only the posts that holds a specific tag
 * @returns an array of posts that contains a specified tag
 */
export async function getPostsWithTags() {
  const newArray = [];

  for (let i = 0; i < 3; i++) {
    const posts = await fetchData(`${API_BASE}${API_POSTS}?page=${i + 1}&_author=true&_comments=true&_reactions=true`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    posts.data.forEach(post => {
      newArray.push(post);
    });
  }

  const postsWithTag = newArray.filter(post => post.tags[0] === "snapgo");

  return postsWithTag;
}