/**
 * Renders a button with the given text, theme-color (Bootstrap), and a unique class name to target the button later.
 * @param {string} text
 * @param {string} theme
 * @param {string} classname
 * @returns A button element with text, styling and classname
 */

export function renderBtn(text, theme, classname) {
  const element = document.createElement("div");
  element.classList.add("d-flex", "justify-content-center", "my-5");

  const btn = document.createElement("button");
  btn.classList.add("btn", `btn-${theme}`, classname);
  btn.textContent = text;
  element.append(btn);

  return element;
}