import { pageRedirect } from "../../data/pageRedirect.mjs";

export function createImgList(post) {
  const element = document.createElement("img");
  element.src = post.url;
  element.alt = "gallery img";
  element.addEventListener("click", () => {
    pageRedirect(`/feed/post/?id=${post.id}`);
  });
  return element;
}
