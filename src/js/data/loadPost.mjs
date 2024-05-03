import { getPost } from "./API/getPost.mjs";
import { getID } from "./getID.mjs";
import { createCard } from "../ui/postCard/createCard.mjs";

export async function loadPost() {
    const postId = getID();
    if (!postId) {
        console.error ("Post ID is missing from the URL");
        return;
    }
    try {
        const post = await getPost(postId);
        const postElement = createCard(post);
        const container = document.querySelector(".post-container");
        container.innerHTML = ""; // Clear the spinner
        container.append(postElement);
    } catch (error) {
    console.error("Failed to load post");
    }
}