import { errorRouter } from "./errorRouter.mjs";

export function renderError(error, parent) {
  const currentError = errorRouter(error);

  const existingError = document.querySelector(".error");

  if (existingError) {
    existingError.outerHTML = "";
  }

  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error", "mt-3", "p-3", "text-danger", "border", "border-1", "border-danger", "rounded");

  const errorText = document.createElement("p");
  errorText.textContent = currentError;
  errorContainer.append(errorText);

  parent.append(errorContainer);
}
