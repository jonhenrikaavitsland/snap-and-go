import { pageRedirect } from "../../data/pageRedirect.mjs";

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
