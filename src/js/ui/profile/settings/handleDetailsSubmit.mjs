import { makeFormData } from "./makeFormData.mjs";
import { updateSettings } from "./updateSettings.mjs";
/**
 * Handles the form submission event for updating user details.
 *
 * This function prevents the default form submission behavior to manage the process programmatically.
 * It constructs form data, and attempts to update the user settings with this
 * data. If the update is successful, the page is reloaded to reflect changes. In case of an error,
 * the error is logged to the console. This function is attached as an event listener to a form.
 *
 * @async
 * @param {Event} event - The form submission event object.
 * @param {string} user - The username of the user whose details are being updated.
 * @returns {Promise<void>} A Promise that resolves when the update attempt is completed.
 */
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
