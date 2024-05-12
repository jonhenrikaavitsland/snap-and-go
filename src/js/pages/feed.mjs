import { postsWithTags, postsWithTagsChunks } from "../data/posts.mjs";
import { ERROR_API_POSTS, ERROR_CREATE_POST, ERROR_RENDER_VM_BTN } from "../errorHandling/errors.mjs";
import { renderError } from "../errorHandling/renderError.mjs";
import { renderCards } from "../render/renderCards.mjs";
import { createPost } from "../ui/createPost/createPost.mjs";
import { logOut } from "../ui/logOut/logOut.mjs";
import { searchFeed } from "../ui/searchFeed/searchFeed.mjs";
import { sortFeed } from "../ui/sortFeed/sortFeed.mjs";
import { buttonAction } from "../ui/viewMoreBtnFeedPage/buttonAction.mjs";
import { viewMoreBtn } from "../ui/viewMoreBtnFeedPage/viewMoreBtn.mjs";

const parent = document.querySelector(".feed-container");
const btnParent = document.querySelector(".btn-container");
const createParent = document.querySelector("#uploadForm");

parent.innerHTML = "";
try {
  renderCards(postsWithTagsChunks[0], parent);
} catch (error) {
  console.log("something went wrong when getting posts from the API");
  renderError(ERROR_API_POSTS, parent);
}

try {
  viewMoreBtn("View more", "secondary", "view-more-btn", btnParent);
  buttonAction(postsWithTagsChunks, "view-more-btn", parent, btnParent);
} catch (error) {
  console.log("something went wrong rendering the view-more button");
  renderError(ERROR_RENDER_VM_BTN, btnParent);
}

try {
  createPost();
} catch (error) {
  console.log("something went wrong trying to create new post.");
  renderError(ERROR_CREATE_POST, createParent);
}

searchFeed(postsWithTags, parent, btnParent);
console.log(searchFeed);
sortFeed(postsWithTags, parent);
logOut();