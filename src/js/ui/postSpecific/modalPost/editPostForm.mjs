import { updatePost } from "../../../data/API/updatePost.mjs";
import { showAlert } from "./showAlert.mjs";
import { getPost } from "../../../data/API/getPost.mjs";
import { load } from "../../../localStorage/load.mjs";

/**
 * Display a form to edit the post.
 * @param {string} postId - The ID of the post to be edited.
 */
export async function editPostForm(postId, postAuthor) {
    const currentUserProfile = load("profile");

    if (!currentUserProfile || currentUserProfile.name !== postAuthor) {
        showAlert("You can only edit your own posts.", "danger");
        return;
    }

    // Fetch the post details
    let post;
    try {
        post = await getPost(postId);
    } catch (error) {
        console.error("Error loading post data:", error); 
        showAlert("Failed to load post data: " + error.message, "danger");
        return;
    }

    // Ensure the post has media properties
    if (!post.data.media || !post.data.media.url) {
        showAlert("Post media is missing or incorrect.", "danger");
        return;
    }

    const modal = document.createElement("div");
    modal.className = "modal fade";
    modal.id = "editPostModal";
    modal.setAttribute("tabindex", "-1");
    modal.setAttribute("aria-labelledby", "editPostModalLabel");
    modal.setAttribute("aria-hidden", "true");

    const dialog = document.createElement("div");
    dialog.className = "modal-dialog";

    const content = document.createElement("div");
    content.className = "modal-content";

    const header = document.createElement("div");
    header.className = "modal-header";

    const title = document.createElement("h5");
    title.className = "modal-title";
    title.id = "editPostModalLabel";
    title.textContent = "Edit Post";

    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.className = "btn-close";
    closeButton.setAttribute("data-bs-dismiss", "modal");
    closeButton.setAttribute("aria-label", "Close");

    header.append(title);
    header.append(closeButton);

    const body = document.createElement("div");
    body.className = "modal-body";

    const form = document.createElement("form");
    form.id = "editPostForm";

    const titleDiv = document.createElement("div");
    titleDiv.className = "mb-3";

    const titleLabel = document.createElement("label");
    titleLabel.className = "form-label";
    titleLabel.setAttribute("for", "editPostTitle");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "form-control";
    titleInput.id = "editPostTitle";
    titleInput.value = post.data.title;
    titleInput.required = true;

    titleDiv.append(titleLabel);
    titleDiv.append(titleInput);

    const urlDiv = document.createElement("div");
    urlDiv.className = "mb-3";

    const urlLabel = document.createElement("label");
    urlLabel.className = "form-label";
    urlLabel.setAttribute("for", "editPostUrl");
    urlLabel.textContent = "Image URL";

    const urlInput = document.createElement("input");
    urlInput.type = "text";
    urlInput.className = "form-control";
    urlInput.id = "editPostUrl";
    urlInput.value = post.data.media.url;
    urlInput.required = true;

    urlDiv.append(urlLabel);
    urlDiv.append(urlInput);

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.className = "btn btn-primary";
    submitButton.textContent = "Save changes";

    form.append(titleDiv);
    form.append(urlDiv);
    form.append(submitButton);

    form.addEventListener("submit", async event => {
        event.preventDefault();
        const updatedPost = {
            title: document.getElementById("editPostTitle").value,
            media: {
                url: document.getElementById("editPostUrl").value,
                alt: post.data.media.alt,
            },
        };
        try {
            await updatePost(postId, updatedPost);
            showAlert("Post updated successfully!", "success");
            bootstrap.Modal.getInstance(modal).hide();
            setTimeout(() => {
                location.reload();
            }, 1500);
        } catch (error) {
            showAlert("Failed to update post: " + error.message, "danger");
        }
    });
    body.append(form);

    content.append(header);
    content.append(body);

    dialog.append(content);
    modal.append(dialog);

    document.body.append(modal);

    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    modal.addEventListener("hidden.bs.modal", () => {
        modalInstance.dispose();
        modal.remove();
    });
}
