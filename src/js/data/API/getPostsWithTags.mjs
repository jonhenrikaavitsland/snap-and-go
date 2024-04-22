import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

export async function getPostsWithTags() {
  const postsWithTag = [];

  for (let i = 0; i < 2; i++) {
    let posts = await fetchData(`${API_BASE}${API_POSTS}?_author=true&_comments=true&_reactions=true&?page=${i + 1}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    if (posts.data[i].tags[0] === "snapgo") {
      postsWithTag.push(posts.data[i]);
    }
  }
  return postsWithTag;
}