import { load } from "../../localStorage/load.mjs";
import { API_AUIH, API_BASE, API_KEY_URL } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";


/**
 * This is a function to retrieve an API key
 * @returns a API key to be used in the header when fetching the API data
 */
export async function getAPIKey() {
  const data = fetchData(`${API_BASE}${API_AUIH}${API_KEY_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${load("token")}`,
    },
    body: JSON.stringify({
      name: "Test key",
    }),
  });
  return data;
}
