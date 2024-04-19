/**
 * The function loads a specific page based on what page the user is currently on.
 * This way we don't run code on the wrong page.
 * @returns loads a file with all the page specific JS based on current page.
 */

export function router() {
  switch (location.pathname) {
    case "/profile/settings/":
      return import("../pages/profileSettings.mjs");
    case "/profile/":
      return import("../pages/profile.mjs");
    case "/feed/post/":
      return import("../pages/post.mjs");
    case "/feed/":
      return import("../pages/feed.mjs");
    case "/register/":
      return import("../pages/register.mjs");
    case "/":
      return import("../pages/login.mjs");
    default:
      return import("../pages/404.mjs");
  }
}
