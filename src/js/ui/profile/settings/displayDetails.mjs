import { getProfileById } from "../../../data/API/getProfileById.mjs";
import { getUserSession } from "../../../localStorage/session/getUserSession.mjs";
import { handleDetailsSubmit } from "./handleDetailsSubmit.mjs";

export async function displayDetails() {
  const session = getUserSession();
  const username = session.profile.name;
  const user = await getProfileById(username);
  console.log("this is the user: ", user);

  const container = document.querySelector(".content-container");
  container.classList.add("w-50");

  const form = document.createElement("form");
  form.id = "detailsForm";

  const bioLabel = document.createElement("label");
  bioLabel.setAttribute("for", "bio");
  bioLabel.textContent = "Bio";

  const bioTextarea = document.createElement("textarea");
  bioTextarea.id = "bio";
  bioTextarea.className = "form-control";
  bioTextarea.placeholder = "Enter your bio";
  bioTextarea.value = user.data.bio || "";
  form.append(bioTextarea);

  const avatarLabel = document.createElement("label");
  avatarLabel.setAttribute("for", "avatarUrl");
  avatarLabel.textContent = "Avatar URL";
  form.append(avatarLabel);

  const avatarInput = document.createElement("input");
  avatarInput.id = "avatarUrl";
  avatarInput.className = "form-control";
  avatarInput.placeholder = "Enter avatar URL";
  avatarInput.type = "text";
  avatarInput.value = user.data.avatar?.url || "";
  form.append(avatarInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Save Changes";
  form.append(submitButton);

  container.append(form);
  form.addEventListener("submit", (event) => handleDetailsSubmit(event, username));
}
