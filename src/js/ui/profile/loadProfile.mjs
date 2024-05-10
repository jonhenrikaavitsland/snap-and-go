import { getProfileById } from "../../data/API/getProfileById.mjs";
import { getID } from "../../data/getID.mjs";
import { getUserSession } from "../../localStorage/session/getUserSession.mjs";
import { displayUserProfile } from "./displayUser.mjs";
import { displayCounts } from "../../ui/profile/counts/displayCounts.mjs";
import { displayPosts } from "./displayPosts.mjs";

export async function loadProfile() {
  const name = getID("name");
  let user;

  if (name) {
    user = await getProfileById(name);
    displayUserProfile(user, false);
    displayCounts(user);
    displayPosts(name);
  } else {
    const session = getUserSession();
    user = session.profile.name;
    const updatedUser = await getProfileById(user);
    displayUserProfile(updatedUser, true);
    displayCounts(updatedUser);
    displayPosts(user);
  }
}
