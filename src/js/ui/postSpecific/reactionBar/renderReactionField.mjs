import { getPost } from "../../../data/API/getPost.mjs";
import { reactToPost } from "../../../data/API/reactToPost.mjs";
import { reactionBar } from "./reactionBar.mjs";
import { reactionOptions } from "./reactionOptions.mjs";

/**
 * returns the final component that will display current reactions plus the button to choose what reactions to give to the current post.
 * @param {string} postId 
 * @param {variable} parent 
 * @returns {element} html element.
 */
export async function renderReactionField(postId, parent) {
  const element = document.createElement("div");
  element.classList.add("position-relative");

  const response = await getPost(postId);
  const {
    data: { reactions },
  } = response;

  reactions.forEach(react => {
    const reactBtn = document.createElement("button");
    reactBtn.classList.add("btn", "btn-lg");
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
  otherReactions.classList.add("btn", "btn-lg", "fa-duotone", "fa-icons");
  otherReactions.addEventListener("click", () => {
    options.classList.toggle("d-none");
  });
  element.append(otherReactions);

  const options = reactionOptions(postId, parent);
  element.append(options);

  return element;
}
