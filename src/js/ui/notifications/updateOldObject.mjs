import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";

export async function updateOldObject(responsePromise) {
  const oldObject = load("alertChanges");
  let updatedObject;
  console.log("Update Old:", oldObject);

  if (responsePromise) {
    try {
      const response = await responsePromise;
      console.log(response);

      if (response) {
        const {
          data: { id, _count: { comments, reactions } = {} },
        } = response;
        const newPost = {
          id,
          comments,
          reactions,
        };
        updatedObject = { ...oldObject };
        if (updatedObject.posts) {
          updatedObject.posts.push(newPost);
        }
        console.log(updatedObject);
        save("alertChanges", updatedObject);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
