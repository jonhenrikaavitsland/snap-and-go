import { updateBreadcrumbActive } from "../ui/breadCrumb/updateBreadcrumbActive.mjs";
import { sendCommentData } from "../ui/postSpecific/commentComponent/sendCommentData.mjs";
import { loadPost } from "../ui/postSpecific/loadPost.mjs";
import { reactionBar } from "../ui/postSpecific/reactionBar/reactionBar.mjs";
import { getID } from "../data/getID.mjs";

export const postId = getID("id");

loadPost();
setTimeout(sendCommentData, 3000);
updateBreadcrumbActive();
setTimeout(() => {
  reactionBar(postId);
}, 1000);