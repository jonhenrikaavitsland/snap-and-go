/**
 * Display a Bootstrap alert to the user
 * @param {string} message - Message to display in the alert
 * @param {string} type - Type of alert ('success', 'danger', 'info', etc.)
 */
export function showAlert(message, type) {
    const alertEl = document.createElement('div');
    alertEl.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    alertEl.role = 'alert';
    const alertMessage = document.createTextNode(message);
    alertEl.append(alertMessage);

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'alert');
    closeButton.setAttribute('aria-label', 'Close');

    alertEl.append(closeButton);


    document.body.append(alertEl);

    setTimeout(() => {
        alertEl.classList.remove('show');
        alertEl.classList.add('hide');
        alertEl.addEventListener('transitionend', () => alertEl.remove());
    }, 1500); 
}