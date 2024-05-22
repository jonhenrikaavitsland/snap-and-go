import { API_BASE, API_POSTS, API_KEY } from "./constants.mjs";
import { load } from "../../localStorage/load.mjs";

/**
 * Update a post by sending a PUT request to the API.
 * @param {string} postId - The ID of the post to be updated.
 * @param {Object} updatedPost - The updated post data.
 * @returns {Promise<Object>} The updated post data from the API.
 */
export async function updatePost(postId, updatedPost) {
    const url = `${API_BASE}${API_POSTS}/${postId}`;
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${load("token")}`,
                "X-Noroff-API-Key": API_KEY,
            },
            body: JSON.stringify(updatedPost),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Failed to update post: ${response.status} ${errorText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
        throw error;
    }
}
