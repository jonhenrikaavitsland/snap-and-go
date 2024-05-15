/**
 * Changes the DOM to show a user's name, bio, and picture.
 *
 * This function looks for specific places on the web page to put the user's name,
 * bio, and picture. The user's name will have "@" in front of it. It needs the web page
 * to have certain parts of the HTML set up correctly to work.
 *
 * @param {string} name - The name of the user.
 * @param {string} bio - A short description about the user.
 * @param {string} image - The web address for the user's picture.
 */
export function personalProfileInfo(name, bio, image) {
  const userName = document.querySelector(".user-bio section h2");
  const userBio = document.querySelector(".user-bio section div p");
  const userImage = document.querySelector(".user-bio div img");

  const followButton = document.querySelector(".follow-button");

  userName.textContent = "@" + name;
  userBio.textContent = bio;
  userImage.src = image;

  userName.classList.remove("placeholder", "col-4");
  userImage.classList.remove("placeholder");
  userBio.classList.remove("placeholder", "col-6");
  followButton.classList.remove("placeholder");
}
