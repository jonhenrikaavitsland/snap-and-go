import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";
import { toggle } from "./toggle.mjs";

/**
 * Checks that we are not on 404 page, if we are it will exit the function early. 
 * Else it will listen for clicks on the switch for if we want dark-mode or light-mode.
 * When the switch is clicked, it will check localStorage if dark-mode is already active or not, if it is active, it will turn it off and if it is not active, it will turn it on. 
 * If dark-mode is set to active, it will update local-storage!
 * @param {variable} target 
 * @param {variable} element 
 * @param {variable} logo 
 * @param {variable} slogan 
 * @param {variable} activeNavLink 
 * @param {variable} logoSecondary 
 * @param {variable} inputWrap 
 * @param {Array} buttons 
 */
export function toggleMode(target, element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons) {
  if (location.pathname === "/404/") {
    return;
  } else {
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
}
