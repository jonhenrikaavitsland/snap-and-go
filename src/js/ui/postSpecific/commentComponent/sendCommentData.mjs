import { getID } from "../../../data/getID.mjs";
import { collectCommentData } from "./collectCommentData.mjs";

/**
 * Submits a comment for a specific post based on the post ID retrieved from the URL.
 */
export async function sendCommentData() {
    const id = getID("id");
    let commentObject = collectCommentData(id);
}