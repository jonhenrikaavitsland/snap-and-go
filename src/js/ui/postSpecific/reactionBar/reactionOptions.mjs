import { reactToPost } from "../../../data/API/reactToPost.mjs";
import { reactionBar } from "./reactionBar.mjs";

/**
 * creates a container of buttons to select a reaction to give a post.
 * @param {string} postId 
 * @param {variable} parent 
 * @returns {element} html element. 
 */
export function reactionOptions(postId, parent) {
  const element = document.createElement("div");
  element.classList.add("position-absolute");
  element.classList.add("d-none");

  const heart = document.createElement("button");
  heart.textContent = "❤️";

  const rollLaugh = document.createElement("button");
  rollLaugh.textContent = "🤣";

  const thumbsUp = document.createElement("button");
  thumbsUp.textContent = "👍";

  const mad = document.createElement("button");
  mad.textContent = "😡";

  const party = document.createElement("button");
  party.textContent = "🎉";

  const shocked = document.createElement("button");
  shocked.textContent = "😯";

  const buttons = [heart, rollLaugh, thumbsUp, mad, party, shocked];

  buttons.forEach(btn => {
    btn.classList.add("btn", "btn-lg");
    element.append(btn);
    btn.addEventListener("click", () => {
      reactToPost(btn.textContent);
      setTimeout(() => {
        parent.innerHTML = "";
        reactionBar(postId);
      }, 1000);
    });
  });

  return element;
}
