import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

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
