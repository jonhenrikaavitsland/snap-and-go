import { sendPost } from "../../data/API/sendPost.mjs";

export function createPost() {
  document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("textareaControl").value;

    let mediaObject = {
      url: document.getElementById("image-url").value,
      alt: "",
    };

    let tags = ["snapgo"];

    try {
      sendPost(title, tags, mediaObject);
      console.log("Upload was successful");

      document.getElementById("image-url").value = "";
      document.getElementById("textareaControl").value = "";
    } catch (error) {
      console.log(error);
    }
  });
}
