


export function createCommentForm() {
    const element = document.createElement("div");
    element.classList.add("container-fluid", "my-5");

    const heading = document.createElement("h2");
    heading.classList.add("py-5", "text-center", "mt-5");
    heading.textContent = "Add a comment"; 
    element.append(heading);

    const commentContainer = document.createElement("form");

    const innerFormContainer = document.createElement("div");
    innerFormContainer.classList.add("mb-3");
    commentContainer.append(innerFormContainer);

    const label = document.createElement("label");
    label.setAttribute("for", "commentInput");
    label.classList.add("form-label", "visually-hidden");
    label.textContent = "Create a comment";
    innerFormContainer.append(label);

    const commentField = document.createElement("textarea");
    commentField.setAttribute("id", "commentInput");
    commentField.setAttribute("rows", "5");
    commentField.setAttribute("type", "text");
    commentField.classList.add("form-control", "w-100", "p-2", "border", "border-black");
    commentField.setAttribute("placeholder", "Write something");
    innerFormContainer.append(commentField);

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("d-flex", "justify-content-center", "py-3");

    const btn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.classList.add("btn", "btn-secondary", "btn-lg");
    btn.textContent = "Post";
    btnContainer.append(btn);

    commentContainer.append(btnContainer);
    element.append(commentContainer);

    return element;
}