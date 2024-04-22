import { postsWithTags, postsWithTagsChunks } from "../data/posts.mjs";
import { renderCards } from "../render/renderCards.mjs";
import { createPost } from "../ui/createPost/createPost.mjs";

console.log(postsWithTags);
console.log(postsWithTagsChunks);

createPost();
renderCards(postsWithTagsChunks[0]);
