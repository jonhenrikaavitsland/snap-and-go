import { validateUser } from "../../errorHandling/validate/validateUser.mjs";
import { registerUser } from "./registerUser.mjs";

/**
 * Checks that all inputs of the register form meets criteria before attempting to register the user.
 * If the registration was ok, we redirect the user to the login screen, else there will be an error on screen.
 */
export function registerAuth() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const name = event.target.email.value.trim().replace(/@.*$/, "");
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    const validState = validateUser();
    if (validState) {
      await registerUser(name, email, password);
      window.location.href = "/";
    }
  });
}
