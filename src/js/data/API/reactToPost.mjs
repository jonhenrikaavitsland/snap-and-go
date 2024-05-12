import { API_KEY, API_BASE, API_POSTS } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { getID } from "../getID.mjs";
import { load } from "../../localStorage/load.mjs";

export function reactToPost() {
  const likeBtn = document.querySelector(".btn-outline-primary");
  const id = getID("id");
  const url = `${API_BASE}${API_POSTS}/${id}/react/👍`;
  const object = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  };

  likeBtn.addEventListener("click", async function () {
    let reactResponse = await fetchData(url, object);
    console.log(reactResponse);
    return reactResponse;
  });
}
