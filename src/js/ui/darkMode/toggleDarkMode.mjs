import { toggleMode } from "./toggleMode.mjs";
import { toggle } from "./toggle.mjs";

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
