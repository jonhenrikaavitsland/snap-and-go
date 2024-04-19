import { save } from "../../localStorage/save.mjs";
import { API_AUIH, API_BASE, API_LOGIN } from "./constants.mjs";

/**
 * Function to log in to the API.
 *
 * @param {string} email
 * @param {string} password
 * @returns AccessToken and profile which is then stored to local storage.
 */
export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE}${API_AUIH}${API_LOGIN}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    save("token", accessToken);
    save("profile", profile);
    return profile;
  }
  throw new Error(response.status);
}
