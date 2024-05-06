import { save } from "../save.mjs";

export function setUserSession(token, profile) {
  save("token", token);
  save("profile", profile);
}
