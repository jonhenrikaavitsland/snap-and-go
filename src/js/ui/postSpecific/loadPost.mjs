import { getPost } from "../../data/API/getPost.mjs";
import { getID } from "../../data/getID.mjs";
import { createSpecific } from "./createSpecific.mjs";
import { postsWithTags } from "../../data/posts.mjs";
import { findUserByPostId } from "../../data/findUserByPostId.mjs";
import { createCommentForm } from "./commentComponent/commentForm.mjs";
import { displayComments } from "./commentComponent/displayComments.mjs";
import { getComments } from "../../data/API/getComments.mjs";

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

        const comments = await getComments(postId);
        if (comments && comments.length > 0) {
        displayComments(comments);
        } else {
        console.log("No comments to display");
    }

    } catch (error) {
    console.error("Failed to load post", error);
    console.error("Error details:", error.message);
    }
}

