export function isLoggedIn() {
  switch (location.pathname) {
    case "/":
    case "/register/":
      // do nothing!
      break;
    default:
      if (!localStorage.getItem("token")) {
        location.href = "/";
      }
  }
}
