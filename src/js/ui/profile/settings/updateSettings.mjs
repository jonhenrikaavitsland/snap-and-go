import { API_BASE, API_PROFILES } from "../../../data/API/constants.mjs";
import { fetchData } from "../../../data/API/fetch.mjs";
import { load } from "../../../localStorage/load.mjs";

export async function updateSettings(profileName, formData) {
  const response = await fetchData(`${API_BASE}${API_PROFILES}/${profileName}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
    body: JSON.stringify(formData),
  });
  console.log(response);
  return response;
}
