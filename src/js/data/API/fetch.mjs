/**
 * The object is used to fetch information from an external source such as an API.
 * @param {string} url
 * @param {object} object
 * @returns {*} data from the API, often in the form of an array.
 */

export async function fetchData(url, object) {
  const response = await fetch(url, object);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(response.status);
  }

  return result;
}
