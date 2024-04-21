import { getPostsWithImages } from "./API/getPostsWithImage.mjs";
import { splitArrayIntoChunks } from "./splitArrayIntoChunks.mjs";

export const postsWithImage = await getPostsWithImages();

export const postsWithImageChunks = await splitArrayIntoChunks(postsWithImage, 12);