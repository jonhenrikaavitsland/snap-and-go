import { renderList } from "./renderList.mjs";

export function createListOfImages(posts, parent) {
  const listOfImages = posts.map(({ id, media: { url } }) => ({ id, url }));
  renderList(listOfImages, parent);
}
