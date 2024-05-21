/**
 * Constructs and returns an object containing the values of a form intended for user detail submissions.
 *
 * This function selects a form with the ID "detailsForm" from the document, then extracts and
 * structures the values from this form into an object. The object includes fields for the user's
 * bio and avatar details such as the URL and a fixed alt text for the avatar image. This object
 * is used to update user settings or profiles.
 *
 * @returns {Object} An object containing structured form data with properties for 'bio' and 'avatar'.
 *                   The 'avatar' property itself is an object containing 'url' and 'alt' properties.
 */
export function makeFormData() {
  const form = document.getElementById("detailsForm");
  return {
    bio: form.bio.value,
    avatar: {
      url: form.avatarUrl.value,
      alt: "User's avatar",
    },
  };
}
