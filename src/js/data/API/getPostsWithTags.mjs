import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

export async function getPostsWithTags() {
  const postsWithTag = [];
  console.log("TEST:", postsWithTag);

  for (let i = 0; i < 4; i++) {
    const posts = await fetchData(`${API_BASE}${API_POSTS}?_author=true&_comments=true&_reactions=true&?page=${i + 1}`, {
      headers: {
        Authorization: `Bearer ${load("token")}`,
        "X-Noroff-API-Key": API_KEY,
      },
    });

    posts.data.forEach(element => {
      if (posts.data[0].tags[0] === "snapgo") {
        postsWithTag.push(posts.data[0]);
      }
    });

    // for (let y = 0; y < posts.data.length; y++) {
    //   if (posts.data[y].tags[0] === "snapgo") {
    //     postsWithTag.push(posts.data[y]);
    //   }
    // }

    console.log("TEST:", postsWithTag);

    // console.log(posts);

    // if (posts.data[0].tags[0] === "snapgo") {
    //   postsWithTag.push(posts.data[i]);
    // }
  }
  console.log("TEST:", postsWithTag);
  return postsWithTag;
}