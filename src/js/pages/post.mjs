import { updateBreadcrumbActive } from "../ui/breadCrumb/updateBreadcrumbActive.mjs";
import { sendCommentData } from "../ui/postSpecific/commentComponent/sendCommentData.mjs";
import { loadPost } from "../ui/postSpecific/loadPost.mjs";
import { reactToPost } from "../data/API/reactToPost.mjs";

loadPost();
setTimeout(sendCommentData, 3000);
updateBreadcrumbActive();
setTimeout(reactToPost, 1000);
