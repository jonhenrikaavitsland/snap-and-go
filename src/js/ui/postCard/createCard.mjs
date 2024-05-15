/**
 * Function builds a html element as a card using bootstrap classes
 * @param {object} object
 * @returns a card element that will be rendered on the feed page.
 */
export function createCard(object) {
  const element = document.createElement("div");
  element.classList.add("card", "custom-cursor");

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-header", "row", "gap-3");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("col-2");

  const aspect = document.createElement("div");
  aspect.classList.add("ratio", "ratio-1x1");
  avatarContainer.append(aspect);

  const avatar = document.createElement("img");
  avatar.classList.add("img-fluid", "img-thumbnail", "rounded-circle");
  avatar.src = object.author.avatar.url;
  avatar.setAttribute("alt", object.author.avatar.alt);
  aspect.append(avatar);

  cardTop.append(avatarContainer);

  const bioWrap = document.createElement("div");
  bioWrap.classList.add("w-auto");
  bioWrap.addEventListener("click", () => {
    document.location.href = `/profile/?name=${object.author.name}`;
  });

  const user = document.createElement("h4");
  user.textContent = `@${object.author.name}`;
  bioWrap.append(user);

  const time = document.createElement("time");
  time.setAttribute("datetime", object.created);
  time.textContent = object.created.match(/^\d{4}-\d{2}-\d{2}/);
  bioWrap.append(time);

  cardTop.append(bioWrap);

  element.append(cardTop);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("ratio", "ratio-16x9");
  imageContainer.addEventListener("click", function () {
    document.location.href = `./post/?id=${object.id}`;
  });
  element.append(imageContainer);

  const image = document.createElement("img");
  image.src = object.media.url;
  image.setAttribute("alt", object.media.alt);
  image.classList.add("card-img-bottom", "img-fluid");
  imageContainer.append(image);

  return element;
}
