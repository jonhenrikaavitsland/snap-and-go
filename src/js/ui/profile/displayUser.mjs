import { propertiesToVariables } from "../../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../../ui/editProfile/profileInfo.mjs";
import { changeProfileUI } from "./changeProfile.mjs";
export function displayUserProfile(user, canEdit) {
  const { name, bio, imageSrc } = propertiesToVariables(user);
  personalProfileInfo(name, bio, imageSrc);
  changeProfileUI(canEdit);
}
