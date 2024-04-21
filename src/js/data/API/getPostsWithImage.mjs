import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

export async function getPostsWithImages() {
  const postsWithImages = [];

  for (let i = 0; i < 2; i++) {
    let posts = await fetchData(`${API_BASE}${API_POSTS}?page=${i + 1}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    console.log(posts.data[0].media);
    console.log(posts);

    for (let y = 0; y < posts.data.length; y++) {
      if (posts.data[y].media) {
        postsWithImages.push(posts.data[y]);
      }
    }
  }
  return postsWithImages;
}
