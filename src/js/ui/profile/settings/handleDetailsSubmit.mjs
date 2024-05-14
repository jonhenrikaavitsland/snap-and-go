import { makeFormData } from "./makeFormData.mjs";
import { updateSettings } from "./updateSettings.mjs";

export function handleDetailsSubmit(event, user) {
  event.preventDefault();
  console.log("this is event", event);
  const formData = makeFormData();

  console.log("this is user", user);

  updateSettings(user, formData);
}
