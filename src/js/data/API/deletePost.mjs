import { API_BASE, API_POSTS, API_KEY } from "./constants.mjs";
import { load } from "../../localStorage/load.mjs";

/**
 * Delete a post by its ID.
 * @param {string} postId - The ID of the post to delete.
 * @returns {Promise<Object>} - A promise that resolves to the response object or an empty object.
 * @throws {Error} - Throws an error if the deletion fails.
 */


export async function deletePost(postId) {
    const url = `${API_BASE}${API_POSTS}/${postId}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${load("token")}`,
                'X-Noroff-API-Key': API_KEY
            }
        });
        if (!response.ok) {
            const errorText = await response.text();  
            throw new Error(`Failed to delete post: ${response.status} ${errorText}`);
        }
        
        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } catch (error) {
        console.error('Error during deletion:', error);
        throw error;
    }
}

