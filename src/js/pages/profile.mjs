import { updateURLSettings } from "../ui/editProfile/settingsUrlUpdate.mjs";
import { logOut } from "../ui/logOut/logOut.mjs";
import { loadProfile } from "../ui/profile/loadProfile.mjs";

loadProfile();
updateURLSettings();
logOut();
