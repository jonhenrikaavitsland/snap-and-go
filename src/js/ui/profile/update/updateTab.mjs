import { load } from "../../../localStorage/load.mjs";

export function updateActiveTab(activeTab) {
  const tabs = document.querySelectorAll(".btn-group .btn");
  tabs.forEach((tab) => {
    tab.classList.remove("btn-secondary", "z-3");
    tab.style.backgroundColor = "";
    tab.classList.add("btn-light");
  });

  activeTab.classList.add("btn-secondary", "z-3");
  activeTab.classList.remove("btn-light");

  if (load("darkMode")) {
    activeTab.style.backgroundColor = "#FF8B8B";
  }
}
