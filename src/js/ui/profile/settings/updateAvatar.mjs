import { load } from "../../../localStorage/load.mjs";
import { updateSettings } from "./updateSettings.mjs";

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
