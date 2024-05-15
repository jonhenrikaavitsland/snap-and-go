import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";
import { getObject } from "../localStorage/getValue/getObject.mjs";
import { setupTabListeners } from "../listener/tabListeners.mjs";
import { displayAvatars } from "../ui/profile/settings/avatarSelection.mjs";
const object = getObject();
const { name, bio, imageSrc } = propertiesToVariables(object);

personalProfileInfo(name, bio, imageSrc);
displayAvatars();
setupTabListeners(name);
