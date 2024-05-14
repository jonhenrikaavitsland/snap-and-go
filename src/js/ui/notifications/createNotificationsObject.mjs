import { getPostsWithAuthor } from "../../data/API/getPostsWithAuthor.mjs";
import { getUserById } from "../../data/API/getUserById.mjs";
import { load } from "../../localStorage/load.mjs";

export async function createNotificationsObject() {
  // get id
  const { name } = load("profile") || {};
  let notificationObject;

  if (name) {
    // get followers
    const {
      data: {
        _count: { followers },
      },
    } = await getUserById(name);

    // get all posts by user
    // store the post id and number of comments and reactions to each post
    const posts = await getPostsWithAuthor(name);
    const postsData = posts.data.map(({ id, _count: { comments, reactions } }) => ({ id, comments, reactions }));

    // create notifications object
    notificationObject = {
      name: name,
      followers: followers,
      posts: postsData,
    };

    return notificationObject;
  }
}
