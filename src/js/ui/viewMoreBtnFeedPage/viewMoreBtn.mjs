import { renderBtn } from "./renderBtn.mjs";

/**
 * Renders a button
 * @param {string} text
 * @param {string} theme
 * @param {string} classname
 * @param {string} parent
 */
export function viewMoreBtn(text, theme, classname, parent) {
  parent.append(renderBtn(text, theme, classname));
}
