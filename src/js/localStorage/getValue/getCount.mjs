/**
 * Retrieves the count of followers, posts, and following from a user's profile data.
 *
 * This function accesses specific properties within a user object to get the counts of followers,
 * posts, and following associated with the user's profile. These counts are extracted from a nested
 * structure within the user object. The function then returns these counts as an object with properties
 * for each count type. This is useful for displaying or processing user profile metrics in the application.
 *
 * @param {Object} user - The user object containing nested count data.
 * @returns {{followers: number, posts: number, following: number}} An object containing the counts of followers, posts, and following.
 */
export function getCountsProfile(user) {
  const followers = user.data._count.followers;
  const posts = user.data._count.posts;
  const following = user.data._count.following;

  return { followers, posts, following };
}
