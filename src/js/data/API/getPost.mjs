import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";


/**
 * Get a post by sending a GET request to the API.
 * @param {string} id - The ID of the post to retrieve.
 * @returns {Promise<Object>} The post data from the API.
 */

export async function getPost(id) {
    const url = `${API_BASE}${API_POSTS}/${id}`;
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${load("token")}`,
                "X-Noroff-API-Key": API_KEY,
            },
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(
                `Failed to get post: ${response.status} ${errorText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error getting post:", error);
        throw error;
    }
}
