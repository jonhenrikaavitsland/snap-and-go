import { updateBreadcrumbActive } from "../ui/breadCrumb/updateBreadcrumbActive.mjs";
import { logOut } from "../ui/logOut/logOut.mjs";
import { sendCommentData } from "../ui/postSpecific/commentComponent/sendCommentData.mjs";
import { loadPost } from "../ui/postSpecific/loadPost.mjs";

loadPost();
setTimeout(sendCommentData, 3000);
updateBreadcrumbActive();
logOut();
