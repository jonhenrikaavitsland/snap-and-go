import { propertiesToVariables } from "../../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../../ui/editProfile/profileInfo.mjs";
import { changeProfileUI } from "./changeProfile.mjs";
/**
 * Displays a user's profile information and configures UI elements based on edit permissions.
 *
 * This function extracts key properties from a user object such as name, bio, and image source using
 * the `propertiesToVariables` function. It then uses these variables to populate the user's profile
 * display through the `personalProfileInfo` function. Additionally, it adjusts the user interface
 * to enable or disable editing capabilities based on the `canEdit` parameter.
 *
 * @param {Object} user - The user object containing the necessary data for display.
 * @param {boolean} canEdit - Boolean indicating whether the current user has permissions to edit the profile.
 */
export function displayUserProfile(user, canEdit) {
  const { name, bio, imageSrc } = propertiesToVariables(user);
  personalProfileInfo(name, bio, imageSrc);
  changeProfileUI(canEdit);
}
