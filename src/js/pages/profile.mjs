import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";
import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { updateURLSettings } from "../ui/editProfile/settingsUrlUpdate.mjs";

const { name, bio, imageSrc } = propertiesToVariables();

personalProfileInfo(name, bio, imageSrc);
updateURLSettings();
