import { deletePost } from "../../../data/API/deletePost.mjs";
import { showToast } from "./showToast.mjs";

export async function deletePostAlert(postId) {
    if (confirm("Are you sure you want to delete this post?")) {
        try {
            await deletePost(postId);
            showToast("Post deleted successfully!");
        } catch (error) {
            console.error("Failed to delete post:", error);
            showToast("Failed to delete post: " + error.message);
        }
    } else {
        showToast("Post deletion cancelled.");
    }
}
