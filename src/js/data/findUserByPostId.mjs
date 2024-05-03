

export function findUserByPostId(param, posts) {
    for (let i = 0; i < posts.length; i++){
        if (posts[i].id === parseInt(param)){
            return posts[i];
        }
    }
    return null;
}