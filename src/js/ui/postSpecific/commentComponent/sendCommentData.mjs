import { getID } from "../../../data/getID.mjs";
import { collectCommentData } from "./collectCommentData.mjs";


export async function sendCommentData() {
    const id = getID("id");
    console.log("id:", id);
    let commentObject = collectCommentData(id);
    console.log("commentObject:", commentObject);
}