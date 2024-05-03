

export function createSpecific(object, person) {
    const element = document.createElement("div");
    element.classList.add("card", "w-100");
  
    const cardTop = document.createElement("div");
    cardTop.classList.add("card-header", "row", "gap-3");
  
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("col-2");
  
    const aspect = document.createElement("div");
    aspect.classList.add("ratio", "ratio-1x1");
    avatarContainer.append(aspect);
  
    const avatar = document.createElement("img");
    avatar.classList.add("img-fluid", "img-thumbnail", "rounded-circle");
    avatar.src = person.author.avatar.url;
    avatar.setAttribute("alt", person.author.avatar.alt);
    aspect.append(avatar);
  
    cardTop.append(avatarContainer);
  
    const bioWrap = document.createElement("div");
    bioWrap.classList.add("w-auto");
  
    const user = document.createElement("h4");
    user.textContent = `@${person.author.name}`;
    bioWrap.append(user);
  
    const time = document.createElement("time");
    time.setAttribute("datetime", object.data.created);
    time.textContent = object.data.created.match(/^\d{4}-\d{2}-\d{2}/);
    bioWrap.append(time);
  
    cardTop.append(bioWrap);
  
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
    textBox.classList.add("my-4", "fs-3");
    textBox.textContent = object.data.title;
    element.append(textBox);

  
    return element;
  }
