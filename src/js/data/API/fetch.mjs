/**
 * The object is used to fetch information from an external source such as an API.
 * @param {string} url
 * @param {object} object
 * @returns {*} data from the API, often in the form of an array.
 */

import { renderError } from "../../errorHandling/renderError.mjs";

export async function fetchData(url, object) {
  const response = await fetch(url, object);
  const result = await response.json();

  if (!response.ok) {
    const errorParent = document.querySelector(".error-parent");
    renderError(response.status, errorParent);
    throw new Error("response code:", response.status);
  }

  return result;
}
