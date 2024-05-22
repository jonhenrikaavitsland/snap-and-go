import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";
import { createNotificationHTML } from "./createNotificationHTML.mjs";
import { createNotificationsObject } from "./createNotificationsObject.mjs";
import { findChanges } from "./findChanges.mjs";

/**
 * IF on correct page, notify user if there are new notifications.
 */
export async function notifications() {
  if (location.pathname === "/" || location.pathname === "/register/" || location.pathname === "/404/") {
    return; // Exit function early
  } else {
    const notificationParent = document.querySelector(".notification");
    const notificationNumberParent = document.querySelector(".notification-alert");
    const notificationObject = await createNotificationsObject();
    const clearBtn = document.querySelector(".modal-footer button");
    const modalBody = document.querySelector(".modal-body");
    let alertSpotted = false;

    if (localStorage.getItem("alertChanges")) {
      // if object is in storage, load.
      const oldObject = load("alertChanges");
      // check if new object has changed
      const changes = findChanges(oldObject, notificationObject);
      // if it has changed, what has changed?
      if (Object.keys(changes).length !== 0) {
        // If it has changed, alert user
        const newModal = createNotificationHTML(changes);
        modalBody.append(newModal);
        notificationParent.setAttribute("data-bs-toggle", "modal");
        notificationParent.classList.add("custom-cursor");
        notificationNumberParent.style.display = "block";
        // If alert is active, do not store to local storage
        alertSpotted = false;
        clearBtn.addEventListener("click", () => {
          alertSpotted = true;
          // When user has seen the alert, clear alert
          if (alertSpotted) {
            notificationNumberParent.style.display = "none";
            notificationParent.removeAttribute("data-bs-toggle");
            notificationParent.classList.remove("custom-cursor");
            // Store new data
            save("alertChanges", notificationObject);
          } else {
            return; // Exits the function since change has not been spotted yet
          }
        });
      } else {
        return; // Exits the function since there is no changes
      }
    } else {
      // Store new data
      save("alertChanges", notificationObject);
    }
  }
}
