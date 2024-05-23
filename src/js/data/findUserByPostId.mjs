
/**
 * Loops through an array of posts and matches to an id
 * @param {string} param 
 * @param {array} posts 
 * @returns a post item who's id matches the param input, if not found, return null.
 */
export function findUserByPostId(param, posts) {
    for (let i = 0; i < posts.length; i++){
        if (posts[i].id === parseInt(param)){
            return posts[i];
        }
    }
    return null;
}