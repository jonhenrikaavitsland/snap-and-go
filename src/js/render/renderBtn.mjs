/**
 * Renders a button with the given text, theme-color (Bootstrap), and a unique class name to target the button later.
 * @param {string} text
 * @param {string} theme
 * @param {string} classname
 * @returns A button element with text, styling and classname
 */

export function renderBtn(text, theme, classname) {
  const element = document.createElement("button");
  element.classList.add("btn", `btn-${theme}`, classname);
  element.textContent = text;

  return element;
}
