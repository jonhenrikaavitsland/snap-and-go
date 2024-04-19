import { getName } from "../../localStorage/getValue/getName.mjs";
import { loginUser } from "./loginUser.mjs";

export async function loginAuth() {
  const form = document.querySelector("form");
  form.addEventListener("submit", async event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    await loginUser(email, password);

    const name = getName();
    console.log(name);
    window.location.href = `/profile/?name=${name}`;
  });
}
