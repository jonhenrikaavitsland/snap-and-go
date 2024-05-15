import { sendPost } from "../../data/API/sendPost.mjs";

/**
 * This function gathers inputs from form field inputs and sends a 
 * create post request to the API via the sendPost function. 
 * It clears the form fields after successfully sending data to the API.
 * It console logs errors and success message. We will swap these out for visible validation later.
 */
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
      if (!title || title === "") return; // i just added this hoping to prevent the problem in the future.
      sendPost(title, tags, mediaObject);
      console.log("Upload was successful");

      document.getElementById("image-url").value = "";
      document.getElementById("textareaControl").value = "";
    } catch (error) {
      console.log(error);
      throw Error;
    }
  });
}