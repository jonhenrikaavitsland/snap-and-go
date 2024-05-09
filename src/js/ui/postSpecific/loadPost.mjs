import { getPost } from "../../data/API/getPost.mjs";
import { getID } from "../../data/getID.mjs";
import { createSpecific } from "./createSpecific.mjs";
import { postsWithTags } from "../../data/posts.mjs";
import { findUserByPostId } from "../../data/findUserByPostId.mjs";
import { createCommentForm } from "./commentComponent/commentForm.mjs";

/**
 * Load and display the post based on the ID from the URL.
 * @returns {void} - Nothing is returned from this function.
 */
export async function loadPost() {
    const postId = getID("id");
    if (!postId) {
        console.error ("Post ID is missing from the URL");
        return;
    }
    try {
        const post = await getPost(postId);
        const person = await findUserByPostId(postId, postsWithTags);
        let postElement = createSpecific(post, person);
        const container = document.querySelector(".post-container");
        container.innerHTML = ""; // Clear the spinner
        container.append(postElement);
        const commentComponent = createCommentForm();
        container.append(commentComponent);
    } catch (error) {
    console.error("Failed to load post", error);
    }
}

