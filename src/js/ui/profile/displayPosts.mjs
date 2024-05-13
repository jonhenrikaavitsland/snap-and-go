import { getPostsWithAuthor } from "../../data/API/getPostsWithAuthor.mjs";

export async function displayPosts(user) {
  const posts = await getPostsWithAuthor(user);
  const contentContainer = document.querySelector(".content-container");
  const imageContainer = document.createElement("div");
  imageContainer.className = "row row-profile";
  contentContainer.innerHTML = "";
  contentContainer.classList.remove("w-50");
  console.log(posts);
  console.log(Object.keys(posts.data).length);

  for (let i = 0; i < Object.keys(posts.data).length; i++) {
    const col = document.createElement("div");
    col.className = "col-sm-4 gap-2 profile-image-container";

    const img = document.createElement("img");
    img.src = posts.data[i].media.url;
    img.className = "profile-gallery-img";
    col.append(img);
    imageContainer.append(col);
    contentContainer.append(imageContainer);
  }
}
