import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";


/**
 * Get a post by sending a GET request to the API.
 * @param {string} postId - The ID of the post to retrieve.
 * @returns {Promise<Object>} The post data from the API.
 */

export async function getPost(postId) {
    const url = `${API_BASE}${API_POSTS}/${postId}`;
    const object = {
        method: "GET",
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY,
        },
    }
    const response = await fetchData(url, object);
    return response;
}
