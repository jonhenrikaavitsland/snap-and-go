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
