import { pageRedirect } from "../../data/pageRedirect.mjs";

/**
 * Takes a post content item and creates a img element with its content.
 * @param {object} post 
 * @returns {element} img html element.
 */
export function createImgList(post) {
  const element = document.createElement("img");
  element.classList.add("img-fluid", "object-fit-cover", "custom-cursor", "gallery-img", "w-100");
  element.src = post.url;
  element.alt = "gallery img";
  element.addEventListener("click", () => {
    pageRedirect(`/feed/post/?id=${post.id}`);
  });
  return element;
}
