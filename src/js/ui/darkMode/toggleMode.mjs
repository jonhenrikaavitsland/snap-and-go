import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";
import { toggle } from "./toggle.mjs";

export function toggleMode(target, element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons) {
  target.addEventListener("click", () => {
    if (!load("darkMode")) {
      save("darkMode", true);
      toggle(element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons);
    } else {
      localStorage.removeItem("darkMode");
      toggle(element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons);
    }
  });
}
