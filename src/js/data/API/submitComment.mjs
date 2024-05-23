import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * Submits a comment to a specific post using a POST request.
 * This function constructs the request with necessary headers and the comment data in JSON format.
 *
 * @param {string} id - The ID of the post to which the comment will be submitted.
 * @param {Object} commentText - The comment object containing the body of the comment to be posted.
 * @returns {Promise<void>} A promise that resolves when the fetch operation has completed.
 *                           Logs the response or error to the console.
 * @throws {Error} Throws an error if the fetch operation fails, which can be caught by the caller.
 */

export async function submitComment(id, commentText) {
    const url = `${API_BASE}${API_POSTS}/${id}/comment`;
    console.log("url:", url);

    const object = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${load("token")}`, 
            'Content-Type': 'application/json',
            'X-Noroff-API-Key': API_KEY
        },
        body: JSON.stringify(commentText)
    }
    
    try {
        const commentResponse = fetchData(url, object);
        console.log(commentResponse);
    } catch (error) {
    console.error("Failed to submit comment:", error);
        throw error; 
    }

};
