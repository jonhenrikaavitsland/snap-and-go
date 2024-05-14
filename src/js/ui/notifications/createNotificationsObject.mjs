import { getPostsWithAuthor } from "../../data/API/getPostsWithAuthor.mjs";
import { getUserById } from "../../data/API/getUserById.mjs";
import { load } from "../../localStorage/load.mjs";

export async function createNotificationsObject() {
  // get id
  const { name } = load("profile") || {};
  let notificationObject;

  if (name) {
    console.log(name);
    // get followers
    const {
      data: {
        _count: { followers },
      },
    } = await getUserById(name);
    console.log(followers);

    // get all posts by user
    // store the post id and number of comments and reactions to each post
    const posts = await getPostsWithAuthor(name);
    console.log("Posts:", posts);
    const postsData = posts.data.map(({ id, _count: { comments, reactions } }) => ({ id, comments, reactions }));
    console.log(postsData);

    // create notifications object
    notificationObject = {
      name: name,
      followers: followers,
      posts: postsData,
    };

    return notificationObject;
  }
}
