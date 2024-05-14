/**
 * A function to add a decorative underline to the last three list elements in the nav menu. It will only show on hover.
 */
export function navUnderline() {
  if (window.innerWidth <= 767) {
    return; // Exit the function early
  } else {
    if (location.pathname === "/" || location.pathname === "/register/") {
      return; // Exit the function early
    } else {
      const navItems = document.querySelectorAll(".navbar-nav li:nth-last-child(-n+3)");
      navItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
          item.classList.add("border-bottom", "border-secondary");
        });
        item.addEventListener("mouseleave", () => {
          item.classList.remove("border-bottom", "border-secondary");
        });
      });
    }
  }
}