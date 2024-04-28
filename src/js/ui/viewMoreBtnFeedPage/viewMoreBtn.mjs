import { renderBtn } from "../../render/renderBtn.mjs";

export function viewMoreBtn(text, theme, classname, parent) {
  parent.append(renderBtn(text, theme, classname));
}
