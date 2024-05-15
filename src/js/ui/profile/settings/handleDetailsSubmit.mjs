import { makeFormData } from "./makeFormData.mjs";
import { updateSettings } from "./updateSettings.mjs";

export async function handleDetailsSubmit(event, user) {
  event.preventDefault();
  console.log("this is event", event);
  const formData = makeFormData();

  console.log("this is user", user);

  try {
    await updateSettings(user, formData);
    window.location.reload();
  } catch (error) {
    console.error("Failed to update details: ", error);
  }
}
