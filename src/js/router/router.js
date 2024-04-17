/**
 * The function loads a specific page based on what page the user is currently on.
 * This way we don't run code on the wrong page.
 * @returns loads a file with all the page specific JS based on current page.
 */

export function router() {
  switch (location.pathname) {
    case "/profile/":
      return import("../pages/profile.js");
    case "/profile/settings/":
      return import("../pages/profileSettings.js");
    case "/feed/":
      return import("../pages/feed.js");
    case "/feed/post/":
      return import("../pages/post.js");
    case "/register/":
      return import("../pages/register.js");
    case "/":
      return import("../pages/login.js");
    default:
      return import("../pages/404.js");
  }
}
