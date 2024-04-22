/**
 * Function builds a html element as a card using bootstrap classes
 * @param {object} object
 * @returns a card element that will be rendered on the feed page.
 */
export function createCard(object) {
  const element = document.createElement("div");
  element.classList.add("card", "col-md-4", "col-xl-3");

  const cardTop = document.createElement("div");
  cardTop.classList.add("card-header");

  const bioWrap = document.createElement("div");

  const user = document.createElement("h4");
  user.textContent = `@${object.author.name}`;
  bioWrap.append(user);

  const time = document.createElement("time");
  time.setAttribute("datetime", object.created);
  time.textContent = object.created.match(/^\d{4}-\d{2}-\d{2}/);
  bioWrap.append(time);

  cardTop.append(bioWrap);

  element.append(cardTop);

  const image = document.createElement("img");
  image.src = object.media.url;
  image.setAttribute("alt", object.media.alt);
  image.classList.add("card-img-bottom");
  element.append(image);

  return element;
}
