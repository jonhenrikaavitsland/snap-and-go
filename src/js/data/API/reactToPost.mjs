import { API_KEY, API_BASE, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { getID } from "../getID.mjs";
import { load } from "../../localStorage/load.mjs";

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
