import { pageRedirect } from "./pageRedirect.mjs";

/**
 * This function takes an url and checks if url is current page, if it is, it will exit the function early and do nothing, otherwise it will redirect the user to the the url.
 * @param {string} url
 * @returns redirects the user to the param url if not already on the url.
 */
export function run404(url) {
  if (location.pathname === url) {
    return;
  } else {
    pageRedirect(url);
  }
}
