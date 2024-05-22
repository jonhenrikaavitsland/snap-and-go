import { arrangeByIdDescending } from "./arrangeByIdDescending.mjs";
import { arrangeByIdAscending } from "./arrangeByIdAscending.mjs";
import { splitArrayIntoChunks } from "../../data/splitArrayIntoChunks.mjs";
import { renderCards } from "../../render/renderCards.mjs";

const newestFirst = document.querySelector(".newest-first");
const oldestFirst = document.querySelector(".oldest-first");

/**
 * listens to if the sort function is clicked and then sorts array and displays array.
 * @param {array} posts 
 * @param {variable} parent 
 */
export function sortFeed(posts, parent) {
  let newArray = [];
  let chunkedArray;
  newestFirst.addEventListener("click", function () {
    newArray = arrangeByIdDescending(posts);
    chunkedArray = splitArrayIntoChunks(newArray, 12);
    parent.innerHTML = "";
    renderCards(chunkedArray[0], parent);
  });
  oldestFirst.addEventListener("click", function () {
    newArray = arrangeByIdAscending(posts);
    chunkedArray = splitArrayIntoChunks(newArray, 12);
    parent.innerHTML = "";
    renderCards(chunkedArray[0], parent);
  });
}
