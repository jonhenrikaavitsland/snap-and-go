export function changeProfileUI(canEdit) {
  const editButton = document.querySelector(".edit-icon");
  if (editButton) {
    editButton.style.display = canEdit ? "block" : "none";
  }
}
