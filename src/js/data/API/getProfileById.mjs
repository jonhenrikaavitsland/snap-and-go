import { API_BASE, API_PROFILES, API_KEY } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { load } from "../../localStorage/load.mjs";

export async function getProfileById(id) {
  const user = await fetchData(`${API_BASE}${API_PROFILES}/${id}`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return user;
}
