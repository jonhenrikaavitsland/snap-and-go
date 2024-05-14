import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";
import { getObject } from "../localStorage/getValue/getObject.mjs";
import { logOut } from "../ui/logOut/logOut.mjs";
import { setupTabListeners } from "../listener/tabListeners.mjs";
const object = getObject();
const { name, bio, imageSrc } = propertiesToVariables(object);

personalProfileInfo(name, bio, imageSrc);
setupTabListeners(name);
logOut();
