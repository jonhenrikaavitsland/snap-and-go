import { pageRedirect } from "../data/pageRedirect.mjs"

// Run 404 
run404();

function run404() {
  if (location.pathname === "/404/") {
    return;
  } else {
    pageRedirect("/404/");
  }
}
