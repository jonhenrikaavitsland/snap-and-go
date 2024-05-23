import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
import { router } from "./router/router.mjs";
import { navUnderline } from "./ui/nav/underline/navUnderline.mjs";
import { notifications } from "./ui/notifications/notifications.mjs";
import { toggleDarkMode } from "./ui/darkMode/toggleDarkmode.mjs";
import { logOut } from "./ui/logOut/logOut.mjs";
import { updateOldObject } from "./ui/notifications/updateOldObject.mjs";
import { logoRedirect } from "./ui/logo/logoRedirect.mjs";

router();
navUnderline();
notifications();
toggleDarkMode();
logOut();
updateOldObject();
logoRedirect();