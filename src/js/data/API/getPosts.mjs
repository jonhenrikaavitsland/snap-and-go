import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

// export async function getPosts() {
//   const posts = await fetchData(`${API_BASE}${API_POSTS}`, {
//     headers: {
//       Authorization: `Bearer ${load("token")}`,
//       "X-Noroff-API-Key": API_KEY,
//     },
//   });
//   return posts;
// }

export async function getPostsWithImages() {
  const postsWithImages = [];

  for (let i = 0; i < 15; i++) {
    const posts = await fetchData(`${API_BASE}${API_POSTS}?page=${i + 1}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    for (let y = 0; y < posts.length; y++) {
      if (posts[y].media.length >= 10) {
        postsWithImages.push(posts[y]);
      }
    }
  }
  return postsWithImages;
}
