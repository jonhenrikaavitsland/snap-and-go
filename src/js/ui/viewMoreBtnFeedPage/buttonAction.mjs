import { postsWithTagsChunks } from "../../data/posts.mjs";
import { renderCards } from "../../render/renderCards.mjs";
import { viewMoreBtn } from "./viewMoreBtn.mjs";

export function buttonAction(array, classname, parent, btnText, btnTheme) {
  let length = array.length;
  let currentPos = 1;
  const moreBtn = document.querySelector(`.${classname}`);
  console.log(moreBtn);

  console.log("Length", length);
  console.log("Current", currentPos);

  moreBtn.addEventListener("click", function () {
    currentPos += 1;
    console.log("Current", currentPos);
    parent.innerHTML = "";
    for (let i = 0; i < currentPos; i++) {
      renderCards(postsWithTagsChunks[i], parent);
    }
    if (currentPos !== length) {
      viewMoreBtn(btnText, btnTheme, classname, parent);
    }
  });
}
