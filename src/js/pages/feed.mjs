import { getPosts } from "../data/API/getPosts.mjs";
import { postsWithTags, postsWithTagsChunks } from "../data/posts.mjs";
import { renderCards } from "../render/renderCards.mjs";
import { createPost } from "../ui/createPost/createPost.mjs";

console.log(postsWithTags);
console.log(postsWithTagsChunks);
console.log("Last 100:", await getPosts());

createPost();
renderCards(postsWithTagsChunks[0]);
