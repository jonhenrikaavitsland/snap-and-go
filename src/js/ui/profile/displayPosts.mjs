import { getPostsWithAuthor } from "../../data/API/getPostsWithAuthor.mjs";
/**
 * Fetches and displays posts created by a specified user.
 *
 * This function retrieves posts for the user from a server-side function `getPostsWithAuthor`.
 * The posts are then dynamically displayed in a grid layout within the content container. Each post is
 * presented as an image inside an anchor element, which links to the individual post's page. The layout
 * and structure are designed to adjust for responsiveness across different device sizes.
 *
 * @async
 * @param {Object} user - The user object containing identification data used to fetch the posts.
 * @returns {Promise<void>} A Promise that resolves when the posts have been fully displayed.
 */
export async function displayPosts(user) {
  const posts = await getPostsWithAuthor(user);
  const contentContainer = document.querySelector(".content-container");
  const imageContainer = document.createElement("div");
  imageContainer.className = "row row-profile";
  contentContainer.innerHTML = "";
  contentContainer.classList.remove("col-12");
  contentContainer.classList.remove("col-md-6");

  for (let i = 0; i < Object.keys(posts.data).length; i++) {
    const col = document.createElement("div");
    col.className = "col-sm-4 gap-2 profile-image-container";

    const anchor = document.createElement("a");
    anchor.href = `/feed/post/?id=${posts.data[i].id}`;

    const img = document.createElement("img");
    img.src = `${posts.data[i].media.url}`;
    img.alt = "One of my posts";
    img.className = "profile-gallery-img";

    anchor.append(img);
    col.append(anchor);
    imageContainer.append(col);
    contentContainer.append(imageContainer);
  }
}
