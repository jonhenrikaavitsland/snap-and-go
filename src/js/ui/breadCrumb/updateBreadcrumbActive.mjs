import { getID } from "../../data/getID.mjs";

const breadCrumbActiveItem = document.querySelector(".breadcrumb-item.active");

export function updateBreadcrumbActive() {
  const id = getID("id");
  breadCrumbActiveItem.textContent = id;
}
