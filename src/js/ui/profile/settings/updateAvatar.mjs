import { load } from "../../../localStorage/load.mjs";
import { updateSettings } from "./updateSettings.mjs";
/**
 * Updates the user's avatar on their profile and refreshes the page to reflect the change.
 *
 * This function prepares form data with a new avatar URL and an alternative text. It retrieves
 * the user's profile name from local storage and attempts to update the user's
 * settings on the server using the prepared form data. If successful, the page is reloaded. If
 * there is an error during the update, the error is logged to the console.
 *
 * @async
 * @param {string} avatarUrl - The URL of the new avatar image to be set for the user.
 * @returns {Promise<void>} A Promise that resolves when the update attempt is completed, whether successful or not.
 */
export async function updateAvatar(avatarUrl) {
  const formData = {
    avatar: {
      url: avatarUrl,
      alt: "Selected Avatar",
    },
  };

  const profile = load("profile");
  const profileName = profile.name;
  console.log("this is profileName: ", profileName);

  try {
    await updateSettings(profileName, formData);
    window.location.reload();
  } catch (error) {
    console.error("Failed to update avatar: ", error);
  }
}
