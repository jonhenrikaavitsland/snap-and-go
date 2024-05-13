import { API_BASE, API_PROFILES, API_KEY } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";
import { load } from "../../localStorage/load.mjs";

export async function getUserById(id) {
  const url = `${API_BASE}${API_PROFILES}/${id}`;
  console.log(url);

  const object = {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "Content-Type": "application/json",
      "X-Noroff-API-Key": API_KEY,
    },
  };

  try {
    const user = await fetchData(url, object);
    console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
}
