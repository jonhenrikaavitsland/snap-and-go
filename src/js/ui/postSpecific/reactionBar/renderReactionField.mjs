import { getPost } from "../../../data/API/getPost.mjs";
import { reactToPost } from "../../../data/API/reactToPost.mjs";
import { reactionBar } from "./reactionBar.mjs";
import { reactionOptions } from "./reactionOptions.mjs";

export async function renderReactionField(postId, parent) {
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
      setTimeout(() => {
        parent.innerHTML = "";
        reactionBar(postId);
      }, 1000);
    });
    element.append(reactBtn);
  });

  const otherReactions = document.createElement("button");
  otherReactions.classList.add("btn", "fa-duotone", "fa-icons");
  otherReactions.addEventListener("click", () => {
    options.classList.toggle("d-none");
  });
  element.append(otherReactions);

  const options = reactionOptions(postId, parent);
  element.append(options);

  return element;
}
