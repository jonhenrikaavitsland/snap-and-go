import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

/**
 * Fetch single post by ID
 * @param {string} id - The post id to retrieve
 * @returns {promise<Object>} A promise that resolves to the post object.
 */



export async function getPost(id) {
    const url = `${API_BASE}${API_POSTS}/${id}`;  
    const options = {
        headers: {
            Authorization: `Bearer ${load("token")}`,
            "X-Noroff-API-Key": API_KEY
        }
    };

    
    const post = await fetchData(url, options);
    return post;  
}

    