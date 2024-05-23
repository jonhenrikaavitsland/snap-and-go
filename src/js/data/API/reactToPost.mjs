import { API_KEY, API_BASE, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { getID } from "../getID.mjs";
import { load } from "../../localStorage/load.mjs";

/**
 * Function will match input to the correct url for this API request!
 * @param {string} symbol 
 * @returns the original post id, the symbol reacted with, and an array of all reactions on the post.
 * @example 
 * ```js
 * symbol = "👍"
 * switch statement says that url = `${API_BASE}${API_POSTS}/${id}/react/👍`;
 * The API request is now performed with this url. 
 * ```
 */
export async function reactToPost(symbol) {
  const id = getID("id");
  let url;
  switch (symbol) {
    case "👍":
      url = `${API_BASE}${API_POSTS}/${id}/react/👍`;
      break;
    case "🤣":
      url = `${API_BASE}${API_POSTS}/${id}/react/🤣`;
      break;
    case "❤️":
      url = `${API_BASE}${API_POSTS}/${id}/react/❤️`;
      break;
    case "😡":
      url = `${API_BASE}${API_POSTS}/${id}/react/😡`;
      break;
    case "🎉":
      url = `${API_BASE}${API_POSTS}/${id}/react/🎉`;
      break;
    case "😯":
      url = `${API_BASE}${API_POSTS}/${id}/react/😯`;
      break;
    default:
      return;
  }

  const object = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  };

  let reactResponse = await fetchData(url, object);
  return reactResponse;
}
