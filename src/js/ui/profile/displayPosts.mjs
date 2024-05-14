import { getPostsWithAuthor } from "../../data/API/getPostsWithAuthor.mjs";

export async function displayPosts(user) {
  const posts = await getPostsWithAuthor(user);
  const contentContainer = document.querySelector(".content-container");
  const imageContainer = document.createElement("div");
  imageContainer.className = "row row-profile";
  contentContainer.innerHTML = "";
  contentContainer.classList.remove("w-50");

  for (let i = 0; i < Object.keys(posts.data).length; i++) {
    const col = document.createElement("div");
    col.className = "col-sm-4 gap-2 profile-image-container";

    const anchor = document.createElement("a");
    anchor.href = `/feed/post/?id=${posts.data[i].id}`;

    const img = document.createElement("img");
    img.src = `${posts.data[i].media.url}`;
    img.className = "profile-gallery-img";

    anchor.append(img);
    col.append(anchor);
    imageContainer.append(col);
    contentContainer.append(imageContainer);
  }
}
