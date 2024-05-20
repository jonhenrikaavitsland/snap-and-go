import { createImgList } from "./createImgList.mjs";

export function renderList(listOfPosts, parent) {
  listOfPosts.forEach(post => {
    const finalPost = createImgList(post);
    parent.append(finalPost);
  });
}
