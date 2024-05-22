import { toggleMode } from "./toggleMode.mjs";
import { toggle } from "./toggle.mjs";

/**
 * Function holds all inputs for the toggle function.
 * It checks if dark-mode is active, and if it is it will keep it active. 
 * Also runs the toggleMode function that will let us toggle between the states.
 */
export function toggleDarkMode() {
  const modeSwitch = document.querySelector("#flexSwitchCheckDefault");
  const element = document.querySelector("html");
  const logo = document.querySelector(".img-logo");
  const slogan = document.querySelector(".img-slogan");
  const activeNavLink = document.querySelector("nav li .active");
  const logoSecondary = document.querySelector("#logo");
  const inputWrap = document.querySelector(".input-wrap");
  const buttons = document.querySelectorAll("button");

  // checks if mode is active
  toggle(element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons);

  // turns mode on and off
  toggleMode(modeSwitch, element, logo, slogan, activeNavLink, logoSecondary, inputWrap, buttons);
}
