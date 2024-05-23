import { renderReactionField } from "./renderReactionField.mjs";

/**
 * targets parent container and renders reaction component.
 * @param {string} postId 
 */
export async function reactionBar(postId) {
  const buttonParent = document.querySelector(".parent-btn");
  const renderButtons = await renderReactionField(postId, buttonParent);

  buttonParent.append(renderButtons);
}
