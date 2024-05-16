import { pageRedirect } from "../../data/pageRedirect.mjs";

export function createImgList(post) {
  const element = document.createElement("div");
  element.classList.add("ratio", "ratio-1x1");

  const image = document.createElement("img");
  image.classList.add("img-fluid", "object-fit-cover");
  image.src = post.url;
  image.alt = "gallery img";
  image.addEventListener("click", () => {
    pageRedirect(`/feed/post/?id=${post.id}`);
  });

  element.append(image);

  return element;
}
