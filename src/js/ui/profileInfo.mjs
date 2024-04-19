export function personalProfileInfo(name, bio, image) {
  const userName = document.querySelector(".user-bio section h1");
  const userBio = document.querySelector(".user-bio section div p");
  const userImage = document.querySelector(".user-bio div img");

  userName.textContent = "@" + name;
  userBio.textContent = bio;
  userImage.src = image;
}
