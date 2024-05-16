import { createImgList } from "./createImgList.mjs";

export function renderList(listOfPosts, parent) {
  console.log("POSTS:", listOfPosts);
  listOfPosts.forEach(post => {
    const finalPost = createImgList(post);
    parent.append(finalPost);
  });
}
