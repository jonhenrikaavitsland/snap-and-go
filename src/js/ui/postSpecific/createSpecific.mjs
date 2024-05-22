import { pageRedirect } from "../../data/pageRedirect.mjs";
import { showSettingsModal } from "./modalPost/showSettingsModal.mjs";

/**
 * * Creates a DOM element that represents a specific post with detailed information about the author.
 * The created element includes sections for the author's avatar, name, and the post's creation time,
 * as well as the main content of the post like its title and associated media.
 *
 * @param {Object} object - The post object containing data about the post including media and creation time.
 * @param {Object} person - The user object containing details about the post author such as avatar and name.
 * @returns {HTMLElement} A 'div' element structured as a Bootstrap card containing the post and author information.
 */

export function createSpecific(object, person) {
  const element = document.createElement("div");
  element.classList.add("card", "w-100");

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-header", "row", "gap-3", "custom-cursor");
  cardTop.addEventListener("click", () => {
    pageRedirect(`/profile/?name=${person.author.name}`);
  });

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("col-2");

  const aspect = document.createElement("div");
  aspect.classList.add("ratio", "ratio-1x1", "avatar-img", "my-1");
  avatarContainer.append(aspect);

  const avatar = document.createElement("img");
  avatar.classList.add("img-fluid", "img-thumbnail", "rounded-circle");
  avatar.src = person.author.avatar.url;
  avatar.setAttribute("alt", person.author.avatar.alt);
  aspect.append(avatar);

  cardTop.append(avatarContainer);

  const bioWrap = document.createElement("div");
  bioWrap.classList.add("col");

  const user = document.createElement("h4");
  user.textContent = `@${person.author.name}`;
  bioWrap.append(user);

  const time = document.createElement("time");
  time.setAttribute("datetime", object.data.created);
  time.textContent = object.data.created.match(/^\d{4}-\d{2}-\d{2}/);
  bioWrap.append(time);

  cardTop.append(bioWrap);

  const settingsContainer = document.createElement("div");
  settingsContainer.classList.add("w-auto");

  const penWrap = document.createElement("div");
  penWrap.classList.add("custom-cursor", "p-2");

  const settingsPen = document.createElement("i");
  settingsPen.classList.add("fa-duotone", "fa-pen-to-square");
  penWrap.append(settingsPen);
  settingsPen.addEventListener("click", (event) => {
    event.stopPropagation(); 
    const postAuthor = person.author.name; 
    showSettingsModal(object.data.id, postAuthor); 
  });

  settingsContainer.append(penWrap);

  cardTop.append(settingsContainer);

  element.append(cardTop);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("ratio", "ratio-16x9");
  element.append(imageContainer);

  const image = document.createElement("img");
  image.src = object.data.media.url;
  image.setAttribute("alt", object.data.media.alt);
  image.classList.add("card-img-bottom", "img-fluid");
  imageContainer.append(image);

  const textBox = document.createElement("div");
  textBox.classList.add("my-4", "fs-3", "p-2");
  textBox.textContent = object.data.title;
  element.append(textBox);

  const reactionContainer = document.createElement("div");
  reactionContainer.classList.add("parent-btn");

  element.append(reactionContainer);

  return element;
}
