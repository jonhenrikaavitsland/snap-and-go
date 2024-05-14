import { pageRedirect } from "../../data/pageRedirect.mjs";
import { clearUserSession } from "../../localStorage/session/clearUserSession.mjs";

const logOutLink = document.querySelector(".nav-log-out");

export function logOut() {
  if (location.pathname !== "/" || location.pathname !== "/register/") {
    logOutLink.addEventListener("click", function () {
      clearUserSession();
      localStorage.removeItem("alertChanges");
      pageRedirect("/");
    });
  }
}
