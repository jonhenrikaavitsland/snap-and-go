import { load } from "../../localStorage/load.mjs";

export function updateURLSettings() {
  const object = load("profile");
  const editIcon = document.querySelector(".edit-icon");
  editIcon.href = `/profile/settings/?name=${object.name}`;
}
