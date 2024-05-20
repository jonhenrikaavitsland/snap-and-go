import { load } from "../../localStorage/load.mjs";
import { save } from "../../localStorage/save.mjs";

export async function updateOldObject(responsePromise) {
  const oldObject = load("alertChanges");
  let updatedObject;

  if (responsePromise) {
    try {
      const response = await responsePromise;

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
        save("alertChanges", updatedObject);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
