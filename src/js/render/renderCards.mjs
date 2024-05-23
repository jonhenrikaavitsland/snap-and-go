import { createCard } from "../ui/postCard/createCard.mjs";

/**
 * A function to render the cards in the feed
 * It will clear parent before rendering cards via the createCard function.
 * @param {object} cards 
 */
export function renderCards(cards, parent) {
  cards.forEach(element => {
    parent.append(createCard(element));
  });
}
