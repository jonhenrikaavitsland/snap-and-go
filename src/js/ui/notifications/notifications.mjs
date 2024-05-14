import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";
import { createNotificationHTML } from "./createNotificationHTML.mjs";
import { createNotificationsObject } from "./createNotificationsObject.mjs";
import { findChanges } from "./findChanges.mjs";

export async function notifications() {
  if (location.pathname === "/" || location.pathname === "/register/") {
    return; // Exit function early
  } else {
    const notificationParent = document.querySelector(".notification");
    console.log("notificationParent:", notificationParent);
    const notificationNumberParent = document.querySelector(".notification-alert");
    console.log("notificationNumberParent", notificationNumberParent);
    const notificationObject = await createNotificationsObject();
    console.log("notificationsObject:", notificationObject);
    const clearBtn = document.querySelector(".modal-footer button");
    console.log("ClearBtn", clearBtn);
    const modalBody = document.querySelector(".modal-body");
    console.log("ModalBody:", modalBody);
    let alertSpotted;

    if (localStorage.getItem("alertChanges")) {
      // if object is in storage, load.
      const oldObject = load("alertChanges");
      console.log("oldObject:", oldObject);
      // check if new object has changed
      const changes = findChanges(oldObject, notificationObject);
      // if it has changed, what has changed?
      if (changes.length !== 0) {
        console.log("changes:", changes);
        // If it has changed, alert user
        const newModal = createNotificationHTML(changes);
        console.log("newModal html:", newModal);
        modalBody.append(newModal);
        notificationParent.setAttribute("data-bs-toggle", "modal");
        notificationParent.classList.add("custom-cursor");
        notificationNumberParent.style.display = "block";
        // If alert is active, do not store to local storage
        alertSpotted = false;
        clearBtn.addEventListener("click", () => {
          alertSpotted = true;
        });
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
      } else {
        return; // Exits the function since there is no changes
      }
    } else {
      // Store new data
      save("alertChanges", notificationObject);
    }
  }
}
