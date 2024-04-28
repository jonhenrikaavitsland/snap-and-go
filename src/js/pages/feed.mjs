import { postsWithTags, postsWithTagsChunks } from "../data/posts.mjs";
import { renderCards } from "../render/renderCards.mjs";
import { createPost } from "../ui/createPost/createPost.mjs";
import { buttonAction } from "../ui/viewMoreBtnFeedPage/buttonAction.mjs";
import { viewMoreBtn } from "../ui/viewMoreBtnFeedPage/viewMoreBtn.mjs";

const parent = document.querySelector(".feed-container");

console.log("Posts W Tag", postsWithTags);
console.log("Posts chunks", postsWithTagsChunks);

parent.innerHTML = "";
renderCards(postsWithTagsChunks[0], parent);
viewMoreBtn("View more", "secondary", "view-more-btn", parent);
buttonAction(postsWithTagsChunks, "view-more-btn", parent, "View more", "secondary");

createPost();