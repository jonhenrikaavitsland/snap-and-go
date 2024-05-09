import { submitComment } from "../../../data/API/submitComment.mjs";




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

