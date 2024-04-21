import { createCard } from "../ui/postCard/createCard.mjs";

export function renderCards(cards) {
  const parent = document.querySelector(".feed-container");
  parent.innerHTML = "";
  cards.forEach(element => {
    parent.append(createCard(element));
  });
}
