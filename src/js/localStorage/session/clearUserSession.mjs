export function clearUserSession() {
  localStorage.removeItem("token");
  localStorage.removeItem("profile");
}
