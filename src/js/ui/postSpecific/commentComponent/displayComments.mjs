/**
 * Displaying comments in their containers
 * @param {array} comments - An array of comment objects to be displayed
 */

export function displayComments(comments) {
    const commentsContainer = document.querySelector(".post-container");
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment", "mb-3", 'p-2', "border", "rounded");
        commentElement.innerHTML = `
            <p>${comment.body}</p>
            <small>By ${comment.author.name} on ${new Date(comment.created).toLocaleString()}</small>
        `;
        commentsContainer.append(commentElement);
    });
}



