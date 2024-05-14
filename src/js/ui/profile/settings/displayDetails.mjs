import { getObject } from "../../../localStorage/getValue/getObject.mjs";
import { handleDetailsSubmit } from "./handleDetailsSubmit.mjs";

export function displayDetails() {
  const user = getObject();
  console.log("this is user stuff", user.bio);
  console.log("this is user stuff", user.avatar.url);
  console.log("this is user stuff", user.name);
  console.log("this is user in displayDetails: ", user);

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
  bioTextarea.value = user.bio || "";
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
  avatarInput.value = user.avatar?.url || "";
  form.append(avatarInput);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = "btn btn-primary";
  submitButton.textContent = "Save Changes";
  form.append(submitButton);

  container.append(form);
  form.addEventListener("submit", (event) => handleDetailsSubmit(event, user.name));
}
