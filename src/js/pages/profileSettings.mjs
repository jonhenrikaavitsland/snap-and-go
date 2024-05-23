import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";
import { setupTabListeners } from "../listener/tabListeners.mjs";
import { displayAvatars } from "../ui/profile/settings/avatarSelection.mjs";
import { getUserSession } from "../localStorage/session/getUserSession.mjs";
import { getProfileById } from "../data/API/getProfileById.mjs";

async function loadSettingsProfile() {
  const session = getUserSession();
  const user = session.profile.name;
  const updatedUser = await getProfileById(user);
  const { name, bio, imageSrc } = propertiesToVariables(updatedUser);

  personalProfileInfo(name, bio, imageSrc);
  displayAvatars();
  setupTabListeners(name);
}

loadSettingsProfile();
