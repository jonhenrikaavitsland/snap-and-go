import { renderReactionField } from "./renderReactionField.mjs";

export async function reactionBar(postId) {
  const buttonParent = document.querySelector(".parent-btn");
  const renderButtons = await renderReactionField(postId);

  buttonParent.append(renderButtons);
}
