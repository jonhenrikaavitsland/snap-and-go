import { API_BASE, API_PROFILES, API_KEY } from "../../../data/API/constants.mjs";
import { fetchData } from "../../../data/API/fetch.mjs";
import { load } from "../../../localStorage/load.mjs";

export async function updateSettings(profileName, formData) {
  console.log("typeof formData: ", typeof formData);
  console.log("typeof formData: ", typeof JSON.stringify(formData));
  const response = await fetchData(`${API_BASE}${API_PROFILES}/${profileName}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
    body: JSON.stringify(formData),
  });
  console.log("it stop here");
  console.log(response);
  return response;
}
