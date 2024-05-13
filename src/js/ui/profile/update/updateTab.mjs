export function updateActiveTab(activeTab) {
  const btnGroup = document.querySelector(".btn-group");
  const tabs = Array.from(btnGroup.children);
  const middleIndex = 1; // Target index for the middle position

  // Move the selected tab to the middle (index 1)
  btnGroup.insertBefore(activeTab, tabs[middleIndex]);
  // Make sure the tab order is Followers, Posts, Following after moving
  btnGroup.insertBefore(tabs[middleIndex === 0 ? 2 : 0], activeTab); // Adjust the first tab position based on whether it was moved or not

  // Update classes for all tabs to remove active styles
  tabs.forEach((tab) => {
    tab.classList.remove("btn-secondary", "z-3");
    tab.classList.add("btn-light");
  });

  // Add active class to the now middle tab
  activeTab.classList.add("btn-secondary", "z-3");
  activeTab.classList.remove("btn-light");
}
