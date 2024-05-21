import { load } from "../../../localStorage/load.mjs";
/**
 * Updates the visual styling of the currently active tab and resets styling for all other tabs.
 *
 * This function iterates over all tab elements within a button group and removes certain classes
 * and styles to reset their appearance to default. It then applies specific classes to highlight
 * the active tab, enhancing its visual distinction. Additionally, if the dark mode setting is enabled,
 * the active tab's background color is customized further.
 *
 * @param {Element} activeTab - The DOM element of the tab that should be visually marked as active.
 */
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
