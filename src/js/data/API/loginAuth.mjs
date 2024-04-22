import { propertiesToVariables } from "../../localStorage/getValue/propertiesToVariables.mjs";
import { loginUser } from "./loginUser.mjs";

/**
 * Function to authenticate user upon login.
 * If successful, it redirects user to its personal profile page.
 */
export async function loginAuth() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await loginUser(email, password);

    const object = propertiesToVariables();
    window.location.href = `/profile/?name=${object.name}`;
  });
}
