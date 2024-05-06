import { getProfileById } from "../../data/API/getProfileById.mjs";
import { getID } from "../../data/getID.mjs";
import { getUserSession } from "../../localStorage/session/getUserSession.mjs";
import { displayUserProfile } from "./displayUser.mjs";
export async function loadProfile() {
  const name = getID("name");
  let user;

  if (name) {
    user = await getProfileById(name);
    displayUserProfile(user, false);
  } else {
    const session = getUserSession();
    user = session.profile;
    displayUserProfile(user, true);
  }
}
