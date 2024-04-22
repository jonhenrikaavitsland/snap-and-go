import { registerUser } from "./registerUser.mjs";

/**
 * This function is used to authenticate the registration of a new user.
 * If the registration was successful, the user is redirected to the root.
 */
export async function registerAuth() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const name = event.target.email.value.replace(/@.*$/, "");
    const email = event.target.email.value;
    let password;

    if (event.target.password.value === event.target.repeatPassword.value) {
      password = event.target.password.value;
    } else {
      throw new Error("Password must match");
    }
    await registerUser(name, email, password);

    window.location.href = "/";
  });
}
