import { API_BASE, API_POSTS, API_KEY } from "./constants.mjs";
import { load } from "../../localStorage/load.mjs";

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

