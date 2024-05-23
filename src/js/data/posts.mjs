import { getPostsWithTags } from "./API/getPostsWithTags.mjs";
import { splitArrayIntoChunks } from "./splitArrayIntoChunks.mjs";

export const postsWithTags = await getPostsWithTags();

export const postsWithTagsChunks = await splitArrayIntoChunks(postsWithTags, 12);
