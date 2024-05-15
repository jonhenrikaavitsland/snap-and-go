import { load } from "../../localStorage/load.mjs";

export function toggle(element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons) {
  if (load("darkMode")) {
    element.setAttribute("data-bs-theme", "dark");
    logo.src = "/src/assets/images/logo-dark.png";
    slogan.src = "/src/assets/images/slogan-dark.png";
    if (activeNavLink) activeNavLink.style.color = "#FFA3A3";
    if (logoSecondary) logoSecondary.src = "/src/assets/images/logo-dark.png";
    if (inputWrap) {
      inputWrap.classList.remove("bg-white");
      inputWrap.classList.add("bg-dark");
    }
    if (buttons) {
      buttons.forEach(btn => {
        if (btn.classList.contains("button-second")) {
          btn.classList.remove("btn-secondary");
          btn.style.backgroundColor = "#FF8B8B";
          btn.classList.add("text-black");
        }
      });
    }
  } else {
    element.removeAttribute("data-bs-theme");
    logo.src = "/src/assets/images/logo.png";
    slogan.src = "/src/assets/images/slogan.png";
    if (activeNavLink) activeNavLink.style.color = "";
    if (logoSecondary) logoSecondary.src = "/src/assets/images/logo.png";
    if (inputWrap) {
      inputWrap.classList.remove("bg-dark");
      inputWrap.classList.add("bg-white");
    }
    if (buttons) {
      buttons.forEach(btn => {
        if (btn.classList.contains("button-second")) {
          btn.classList.add("btn-secondary");
          btn.style.backgroundColor = "";
          btn.classList.remove("text-black");
        }
      });
    }
  }
}
