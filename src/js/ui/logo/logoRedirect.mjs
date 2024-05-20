import { pageRedirect } from "../../data/pageRedirect.mjs";

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
