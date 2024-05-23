import { deletePost } from "../../../data/API/deletePost.mjs";
import { showAlert } from "./showAlert.mjs";
import { pageRedirect } from "../../../data/pageRedirect.mjs";
import { load } from "../../../localStorage/load.mjs";

export async function deletePostAlert(postId, postAuthor) {
    const currentUserProfile = load("profile");
    if (!currentUserProfile || currentUserProfile.name !== postAuthor) {
        showAlert("You can only delete your own posts.", "danger");
        return;
    }

    if (confirm("Are you sure you want to delete this post?")) {
        try {
            await deletePost(postId);
            showAlert("Post deleted successfully!", "success");
            setTimeout(() => {
                pageRedirect("/feed/");
            }, 1500);
        } catch (error) {
            console.error("Failed to delete post:", error);
            showAlert("Failed to delete post: " + error.message, "danger");
        }
    } else {
        showAlert("Post deletion cancelled.", "info");
    }
}
