import { fetchData } from "./fetch.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { load } from "../../localStorage/load.mjs";

/**
 * Retrieves comments for a specific post by its ID from the API.
 * This function makes an HTTP GET request to fetch the comments associated with a post.
 * Comments are expected to be returned as an array; if none exist, an empty array is returned.
 *
 * @param {string} postId - The ID of the post for which comments are to be fetched.
 * @returns {Promise<Array>} A promise that resolves to an array of comment objects. If the fetch fails or no comments exist, an empty array is returned.
 * @throws {Error} Throws an error if the fetch operation fails. This error is logged to the console, but an empty array is returned to prevent application crashes.
 */

export async function getComments(postId) {
    const url = `${API_BASE}${API_POSTS}/${postId}?_comments=true`;
    try {
        const response = await fetchData(url, {
            headers: {
                Authorization: `Bearer ${load("token")}`,
                "X-Noroff-API-Key": API_KEY
            }
        });
        return response.data.comments || []; 
    } catch (error) {
        console.error("Failed to fetch comments:", error);
        return [];
    }
}