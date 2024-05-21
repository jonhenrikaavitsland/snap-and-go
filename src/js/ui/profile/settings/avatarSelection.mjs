import { updateAvatar } from "./updateAvatar.mjs";

const predefinedAvatars = [
  "https://tinypic.host/images/2024/05/14/maleLion.md.webp",
  "https://tinypic.host/images/2024/05/14/maleHorse.md.webp",
  "https://tinypic.host/images/2024/05/14/maleGiraffe.md.webp",
  "https://tinypic.host/images/2024/05/14/maleElephant.md.webp",
  "https://tinypic.host/images/2024/05/14/maleDog.md.webp",
  "https://tinypic.host/images/2024/05/14/maleCow.md.webp",
  "https://tinypic.host/images/2024/05/14/maleChicken.md.webp",
  "https://tinypic.host/images/2024/05/14/maleCat.md.webp",
  "https://tinypic.host/images/2024/05/14/maleBear.md.webp",
  "https://tinypic.host/images/2024/05/14/femaleDog.md.webp",
  "https://tinypic.host/images/2024/05/14/femaleGiraffe.md.webp",
  "https://tinypic.host/images/2024/05/14/femaleCat.md.webp",
];

export function displayAvatars() {
  const container = document.querySelector(".content-container");
  container.innerHTML = "";
  container.classList.add("w-50");
  const avatarContainer = document.createElement("div");
  avatarContainer.className = "d-flex flex-wrap ";
  let selectedAvatarUrl = "";

  predefinedAvatars.forEach((avatarUrl) => {
    const imageDiv = document.createElement("div");
    imageDiv.className = "col-sm-4 d-flex justify-content-center p-2";
    const img = document.createElement("img");
    img.src = avatarUrl;
    img.className = "img-fluid avatar-option";
    img.alt = "Avatar Image";
    img.style.maxWidth = "100px";
    img.style.borderRadius = "50%";
    img.addEventListener("click", function () {
      document.querySelectorAll(".avatar-option").forEach((i) => i.classList.remove("selected-avatar"));
      img.classList.add("selected-avatar");
      selectedAvatarUrl = avatarUrl;
    });
    imageDiv.append(img);
    avatarContainer.append(imageDiv);
  });

  const saveButton = document.createElement("button");
  saveButton.textContent = "Save Avatar";
  saveButton.className = "btn btn-primary mt-3 save-avatar-button";
  saveButton.addEventListener("click", () => {
    if (selectedAvatarUrl) {
      updateAvatar(selectedAvatarUrl);
    } else {
      alert("Please select an avatar before saving.");
    }
  });

  container.append(avatarContainer, saveButton);
}
