import { load } from "../load.mjs";

export function getUserSession() {
  return {
    token: load("token"),
    profile: load("profile"),
  };
}
