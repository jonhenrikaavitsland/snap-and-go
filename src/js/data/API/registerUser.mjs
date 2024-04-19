import { API_AUIH, API_BASE, API_REGISTER } from "./constants.mjs";
import { fetchData } from "./fetch.mjs";

// export async function registerUser(name, email, password) {
//   const response = await fetch(`${API_BASE}${API_AUIH}${API_REGISTER}`, {
//     headers: {
//       "Content-Type": "application/json; charset=UTF-8",
//     },
//     method: "POST",
//     body: JSON.stringify({ name, email, password }),
//   });

//   if (!response.ok) {
//     throw new Error("Could not register the account");
//   }

//   const data = await response.json();
//   return data;
// }

/**
 * The function will send a POST request to the API and try to register new user
 * @param {string} name
 * @param {string} email
 * @param {string} password
 * @returns Function returns a response status code
 */
export async function registerUser(name, email, password) {
  const data = fetchData(`${API_BASE}${API_AUIH}${API_REGISTER}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({ name, email, password }),
  });
  return data;
}
