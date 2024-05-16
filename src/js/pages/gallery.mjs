import { postsWithTags } from "../data/posts.mjs";
import { createListOfImages } from "../ui/gallery/createListOfImages.mjs";

const gallery = document.querySelector(".gallery");

createListOfImages(postsWithTags, gallery);
