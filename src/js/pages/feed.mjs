import { postsWithImage, postsWithImageChunks } from "../data/posts.mjs";
import { renderCards } from "../render/renderCards.mjs";

console.log(postsWithImage);
console.log(postsWithImageChunks);

renderCards(postsWithImageChunks[0]);
