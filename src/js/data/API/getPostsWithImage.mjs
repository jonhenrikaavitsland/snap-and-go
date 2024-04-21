import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

export async function getPostsWithImages() {
  const postsWithImages = [];

  for (let i = 0; i < 2; i++) {
    let posts = await fetchData(`${API_BASE}${API_POSTS}?_author=true&_comments=true&_reactions=true&?page=${i + 1}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    for (let y = 0; y < posts.data.length; y++) {
      if (posts.data[y].media) {
        postsWithImages.push(posts.data[y]);
      }
    }
  }
  return postsWithImages;
}