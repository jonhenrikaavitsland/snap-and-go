import { getID } from "../../data/getID.mjs";
import { getObject } from "../../localStorage/getValue/getObject.mjs";

// if username in url and username in local storage is the same then redirect user to personal profile page.
export function redirectToProfile() {
  const urlUsername = getID("name");

  const user = getObject();
  const loggedInUsername = user.name;

  if (urlUsername === loggedInUsername) {
    window.location.href = "/profile/";
  }
}
