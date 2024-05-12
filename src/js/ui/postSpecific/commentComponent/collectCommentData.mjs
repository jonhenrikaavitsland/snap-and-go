import { submitComment } from "../../../data/API/submitComment.mjs";

/**
 * Attaches an event listener to the comment form to handle its submission.
 * The function validates the comment text against a specified regex pattern to ensure it contains
 * only allowed characters. If the comment passes validation, it proceeds to submit the comment.
 * 
 * @param {string} id - The ID of the post to which the comment is being added.
 * @returns {void} Does not return a value; modifies the state indirectly by submitting the comment.
 */



export function collectCommentData(id) {

    const commentForm = document.querySelector("form");
console.log(commentForm);

    const commentField = document.querySelector("textarea");
console.log(commentField);

    const formBtn = document.querySelector("button");
console.log(formBtn);

    const testRegex = /^[a-zA-Z0-9\s!.,&'"():;?+-]*$/;

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        if (testRegex.test(commentField.value.trim())) {
            let commentObject = {
            "body": commentField.value
            } 
            console.log(commentObject);
            submitComment(id, commentObject);
        } else {
            return null;
        }
        
    });
}

