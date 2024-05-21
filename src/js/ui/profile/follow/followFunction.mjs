import { fetchData } from "../../../data/API/fetch.mjs";
import { API_BASE, API_PROFILES, API_KEY } from "../../../data/API/constants.mjs";
import { load } from "../../../localStorage/load.mjs";

export async function apiFollowFunction(action, profileName) {
  const response = await fetchData(`${API_BASE}${API_PROFILES}/${profileName}/${action}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  return response;
}
