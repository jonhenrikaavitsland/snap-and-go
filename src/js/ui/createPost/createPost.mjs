import { sendPost } from "../../data/API/sendPost.mjs";
import { checkTextInputLength } from "./checkTextInputLength.mjs";

export function createPost() {
  const imageUrl = document.querySelector("#image-url").value;
  const title = document.querySelector("#textareaControl").value;
  const form = document.querySelector("#uploadForm");

  form.addEventListener("submit", async event => {
    event.preventDefault();

    checkTextInputLength(title, 150);

    let mediaObject = {
      url: imageUrl,
      alt: "",
    };

    let tags = ["snapgo"];

    await sendPost(title, tags, mediaObject).then(console.log());
  });
}
