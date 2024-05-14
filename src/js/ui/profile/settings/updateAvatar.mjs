import { load } from "../../../localStorage/load.mjs";
import { updateSettings } from "./updateSettings.mjs";

export function updateAvatar(avatarUrl) {
  const formData = {
    avatar: {
      url: avatarUrl,
      alt: "Selected Avatar",
    },
  };

  const profile = load("profile");
  const profileName = profile.name;
  console.log("this is profileName: ", profileName);
  updateSettings(profileName, formData);
}
