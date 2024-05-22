import { deletePostAlert } from "./deletePostAlert.mjs";
import { editPostForm } from "./editPostForm.mjs";

export function showSettingsModal(postId, postAuthor) {
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.id = 'settingsModal';
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'settingsModalLabel');
    modal.setAttribute('aria-hidden', 'true');

    const dialog = document.createElement('div');
    dialog.className = 'modal-dialog';

    const content = document.createElement('div');
    content.className = 'modal-content';

    const header = document.createElement('div');
    header.className = 'modal-header';

    const title = document.createElement('h5');
    title.className = 'modal-title';
    title.id = 'settingsModalLabel';
    title.textContent = 'Post Settings';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    header.append(title);
    header.append(closeButton);

    const body = document.createElement('div');
    body.className = 'modal-body';

    const editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.className = 'btn btn-primary';
    editButton.textContent = 'Edit Post';
    editButton.onclick = () => editPostForm(postId, postAuthor);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-danger';
    deleteButton.textContent = 'Delete Post';
    deleteButton.onclick = () => {
        deletePostAlert(postId, postAuthor); 
    };
    

    body.append(editButton);
    body.append(deleteButton);

    content.append(header);
    content.append(body);

    dialog.append(content);
    modal.append(dialog);

    
    document.body.append(modal);

    
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();

    
    modal.addEventListener('hidden.bs.modal', () => {
        modalInstance.dispose();
        modal.remove();
    });
}
