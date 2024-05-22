import { pageRedirect } from "../../data/pageRedirect.mjs";

/**
 * IF the user clicks the logo, they redirect to the correct page unless they are on a page where this functionality is not supposed to work.
 */
export function logoRedirect() {
  const logo = document.querySelector(".logo-wrap");

  switch (location.pathname) {
    case "/":
    case "/404/":
    case "/feed/":
      break;
    case "/register/":
      logo.classList.add("custom-cursor");
      logo.addEventListener("click", () => {
        pageRedirect("/");
      });
      break;
    default:
      logo.classList.add("custom-cursor");
      logo.addEventListener("click", () => {
        pageRedirect("/feed/");
      });
  }
}
