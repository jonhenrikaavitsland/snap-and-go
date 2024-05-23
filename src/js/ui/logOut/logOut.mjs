import { pageRedirect } from "../../data/pageRedirect.mjs";

const logOutLink = document.querySelector(".nav-log-out");

/**
 * Checks what page the user is on, and if the page holds a logout button, the button will log the user out and clear localStorage, then redirect the user to root after 1000 ms.
 */
export function logOut() {
  if (location.pathname === "/" || location.pathname === "/register/" || location.pathname === "/404/") {
    return;
  } else {
    logOutLink.addEventListener("click", () => {
      localStorage.clear();
      setTimeout(() => {
        pageRedirect("/");
      }, 1000);
    });
  }
}
