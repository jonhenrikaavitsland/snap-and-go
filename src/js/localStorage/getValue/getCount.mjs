export function getCountsProfile(user) {
  console.log(user);
  const followers = user.data._count.followers;
  const posts = user.data._count.posts;
  const following = user.data._count.following;

  return { followers, posts, following };
}
