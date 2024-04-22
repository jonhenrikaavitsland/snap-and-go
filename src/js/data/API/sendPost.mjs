import { API_BASE, API_POSTS, API_KEY } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { load } from "../../localStorage/load.mjs";

export async function sendPost(title, tags, media) {
  const postResponse = await fetchData(`${API_BASE}${API_POSTS}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
    method: "POST",
    body: JSON.stringify({ title, tags, media }),
  });
  return postResponse;
}
