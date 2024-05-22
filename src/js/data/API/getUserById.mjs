import { API_BASE, API_PROFILES, API_KEY } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { load } from "../../localStorage/load.mjs";

/**
 * Function to get single user object from the API
 * @param {string} id 
 * @returns {object} single profile from the API.
 */
export async function getUserById(id) {
  const url = `${API_BASE}${API_PROFILES}/${id}`;

  const object = {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "Content-Type": "application/json",
      "X-Noroff-API-Key": API_KEY,
    },
  };

  try {
    const user = await fetchData(url, object);
    return user;
  } catch (error) {
    console.log(error);
  }
}
