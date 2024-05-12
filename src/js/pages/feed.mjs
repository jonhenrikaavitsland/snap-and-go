import { postsWithTags, postsWithTagsChunks } from "../data/posts.mjs";
import { renderCards } from "../render/renderCards.mjs";
import { createPost } from "../ui/createPost/createPost.mjs";
import { logOut } from "../ui/logOut/logOut.mjs";
import { searchFeed } from "../ui/searchFeed/searchFeed.mjs";
import { sortFeed } from "../ui/sortFeed/sortFeed.mjs";
import { buttonAction } from "../ui/viewMoreBtnFeedPage/buttonAction.mjs";
import { viewMoreBtn } from "../ui/viewMoreBtnFeedPage/viewMoreBtn.mjs";

const parent = document.querySelector(".feed-container");
const btnParent = document.querySelector(".btn-container");

parent.innerHTML = "";
renderCards(postsWithTagsChunks[0], parent);
viewMoreBtn("View more", "secondary", "view-more-btn", btnParent);
buttonAction(postsWithTagsChunks, "view-more-btn", parent, btnParent);

createPost();
searchFeed(postsWithTags);
sortFeed(postsWithTags, parent);
logOut();