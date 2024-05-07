import { getPost } from "../data/API/getPost.mjs";
import { getID } from "../data/getID.mjs";
import { sendCommentData } from "../ui/postSpecific/commentComponent/sendCommentData.mjs";
import { loadPost } from "../ui/postSpecific/loadPost.mjs";


loadPost();
setTimeout(sendCommentData, 3000);

export function testComment() {
    const id = getID("id");
    const postTest = getPost(id);
    console.log(postTest);
}

