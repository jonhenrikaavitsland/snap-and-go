import { renderList } from "./renderList.mjs";

/**
 * Creates an array with objects containing post id and url.
 * Used to render the images and linking to the correct specific page.
 * @param {Array} posts 
 * @param {variable} parent 
 */
export function createListOfImages(posts, parent) {
  const listOfImages = posts.map(({ id, media: { url } }) => ({ id, url }));
  renderList(listOfImages, parent);
}
