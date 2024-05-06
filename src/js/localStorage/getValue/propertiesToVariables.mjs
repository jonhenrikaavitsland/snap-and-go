/**
 * Gets user profile details and prepares them to be used elsewhere.
 *
 * This function fetches user data using the `getObject` function. It then takes out the
 * user's name, biography, and image link from this data. These details are then put
 * together and returned in a format that other parts of the program can use.
 *
 * @returns {Object} An object containing the user's name, biography, and image URL.
 */
export function propertiesToVariables(user) {
  console.log(user);
  const userData = user.data ? user.data : user;

  const name = userData.name;
  const bio = userData.bio;
  const imageSrc = userData.avatar.url;
  return { name, bio, imageSrc };
}
