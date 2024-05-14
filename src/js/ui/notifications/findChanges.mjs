export function findChanges(oldObject, newObject) {
  let changes = {};

  if (newObject.followers > oldObject.followers) {
    changes.followers = newObject.followers - oldObject.followers;
  }

  newObject.posts.forEach((newPost, i) => {
    let oldPost = oldObject.posts[i];
    if (!oldPost) return; // If post doesn't exist in old object

    if (newPost.comments > oldPost.comments) {
      if (!changes.posts) changes.posts = [];
      changes.posts.push({ id: newPost.id, comments: newPost.comments - oldPost.comments });
    }

    if (newPost.reactions > oldPost.reactions) {
      if (!changes.posts) changes.posts = [];
      changes.posts.push({ id: newPost.id, reactions: newPost.reactions - oldPost.reactions });
    }
  });

  return changes;
}