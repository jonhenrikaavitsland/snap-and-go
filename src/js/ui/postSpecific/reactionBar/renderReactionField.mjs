import { getPost } from "../../../data/API/getPost.mjs";
import { reactToPost } from "../../../data/API/reactToPost.mjs";
import { reactionOptions } from "./reactionOptions.mjs";

export async function renderReactionField(postId) {
  const element = document.createElement("div");
  element.classList.add("position-relative");

  const response = await getPost(postId);
  const {
    data: { reactions },
  } = response;

  reactions.forEach(react => {
    const reactBtn = document.createElement("button");
    reactBtn.classList.add("btn");
    reactBtn.textContent = `${react.count} ${react.symbol}`;
    reactBtn.addEventListener("click", () => {
      reactToPost(react.symbol);
    });
    element.append(reactBtn);
  });

  const otherReactions = document.createElement("button");
  otherReactions.classList.add("btn", "fa-duotone", "fa-icons");
  otherReactions.addEventListener("click", () => {
    options.classList.toggle("d-none");
  });
  element.append(otherReactions);

  const options = reactionOptions();
  element.append(options);

  return element;
}
