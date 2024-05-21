/**
 * Toggles the visibility of the edit and follow buttons on a user profile based on the user's edit permissions.
 *
 * This function selects the edit and follow buttons from the DOM. If the edit button is present, it sets the display
 * style of the edit button to 'block' if the user has edit permissions (i.e., canEdit is true) and to 'none' otherwise.
 * Conversely, the follow button is shown only when the user does not have edit permissions.
 *
 * @param {boolean} canEdit - A boolean indicating whether the user has permissions to edit the profile.
 */
export function changeProfileUI(canEdit) {
  const editButton = document.querySelector(".edit-icon");
  const followButton = document.querySelector(".follow-button");
  if (editButton) {
    editButton.style.display = canEdit ? "block" : "none";
    followButton.style.display = canEdit ? "none" : "block";
  }
}
