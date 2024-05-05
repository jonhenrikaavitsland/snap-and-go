import { validateUser } from "../../errorHandling/validate/validateUser.mjs";
import { registerUser } from "./registerUser.mjs";


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
