import { load } from "../../localStorage/load.mjs";
import { API_BASE, API_KEY } from "./constants.mjs";

export async function submitComment(postId, commentText) {
    const url = `${API_BASE}/posts/${postId}/comments`;
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${load("token")}`, 
            'Content-Type': 'application/json',
            'X-Noroff-API-Key': API_KEY
        },
        body: JSON.stringify({ body: commentText })
};

try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
} catch (error) {
    console.error("Failed to submit comment:", error);
    throw error; 
}
}
