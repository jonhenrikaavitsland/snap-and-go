import { renderList } from "./renderList.mjs";

export function createListOfImages(posts, parent) {
  const listOfImages = posts.map(({ id, media: { url } }) => ({ id, url }));
  console.log("List of Images:", listOfImages);
  renderList(listOfImages, parent);
}
