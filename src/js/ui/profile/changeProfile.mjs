export function changeProfileUI(canEdit) {
  const editButton = document.querySelector(".edit-icon");
  const followButton = document.querySelector(".follow-button");
  if (editButton) {
    editButton.style.display = canEdit ? "block" : "none";
    followButton.style.display = canEdit ? "none" : "block";
  }
}
