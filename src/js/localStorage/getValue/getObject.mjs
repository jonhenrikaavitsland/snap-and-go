// Function use name to get the entire object

import { load } from "../load.mjs";

export function getObject() {
  const object = load("profile");

  return object;
}
