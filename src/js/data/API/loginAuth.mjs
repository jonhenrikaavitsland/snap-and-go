import { propertiesToVariables } from "../../localStorage/getValue/propertiesToVariables.mjs";
import { loginUser } from "./loginUser.mjs";
import { validateUser } from "../../errorHandling/validate/validateUser.mjs";

/**
 * Validates inputs, and if passed validation it tries to log the user in.
 * If success, the user is let in, if not we get error message.
 */
export function loginAuth() {
  const form = document.querySelector("form");

  form.addEventListener("submit", async event => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();

    const validState = validateUser();
    if (validState === true) {
      await loginUser(email, password);
    }

    const object = propertiesToVariables();
    window.location.href = `/profile/?name=${object.name}`;
  });
}
