import { createImgList } from "./createImgList.mjs";

/**
 * Takes an array amd fpr each post in the array, creates a list of images.
 * @param {Array} listOfPosts 
 * @param {Variable} parent 
 */
export function renderList(listOfPosts, parent) {
  listOfPosts.forEach(post => {
    const finalPost = createImgList(post);
    parent.append(finalPost);
  });
}
