import { reactToPost } from "../../../data/API/reactToPost.mjs";
import { reactionBar } from "./reactionBar.mjs";

export function reactionOptions(postId, parent) {
  const element = document.createElement("div");
  element.classList.add("position-absolute");
  element.classList.add("d-none");

  const heart = document.createElement("button");
  heart.textContent = "❤️";
  heart.classList.add("btn");
  element.append(heart);

  const rollLaugh = document.createElement("button");
  rollLaugh.textContent = "🤣";
  rollLaugh.classList.add("btn");
  element.append(rollLaugh);

  const thumbsUp = document.createElement("button");
  thumbsUp.textContent = "👍";
  thumbsUp.classList.add("btn");
  element.append(thumbsUp);

  const mad = document.createElement("button");
  mad.textContent = "😡";
  mad.classList.add("btn");
  element.append(mad);

  const party = document.createElement("button");
  party.textContent = "🎉";
  party.classList.add("btn");
  element.append(party);

  const shocked = document.createElement("button");
  shocked.textContent = "😯";
  shocked.classList.add("btn");
  element.append(shocked);

  const buttons = [heart, rollLaugh, thumbsUp, mad, party, shocked];

  buttons.forEach(btn => {
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
