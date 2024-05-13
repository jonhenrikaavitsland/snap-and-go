import { updateContent } from "../ui/profile/update/updateContent.mjs";
import { updateActiveTab } from "../ui/profile/update/updateTab.mjs";

export function setupTabListeners(user) {
  const tabs = document.querySelectorAll(".btn-group .btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      console.log(this);
      updateActiveTab(this);
      updateContent(this.id, user);
    });
  });
}
