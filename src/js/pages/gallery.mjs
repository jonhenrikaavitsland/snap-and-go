import { postsWithTags } from "../data/posts.mjs";
import { createListOfImages } from "../ui/gallery/createListOfImages.mjs";

const gallery = document.querySelector(".gallery");

createListOfImages(postsWithTags, gallery);

// THE GALLERY WAS INSPIRED BY A VIDEO MADE BY KEVIN POWELL A COUPLE MONTHS BACK
// https://www.youtube.com/watch?v=A5GXdjEOvos
// The gallery was recreated partially by JS and partially by CSS/bootstrap classes.
// There was a plan to implement further features to the gallery but time was out!