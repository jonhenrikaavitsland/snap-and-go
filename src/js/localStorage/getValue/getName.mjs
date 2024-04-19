import { load } from "../load.mjs";

export function getName() {
  const profile = load("profile");

  return profile.name;
}
