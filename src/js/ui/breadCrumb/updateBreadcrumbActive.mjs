import { getID } from "../../data/getID.mjs";

const breadCrumbActiveItem = document.querySelector(".breadcrumb-item.active");

/**
 * Updates the textContent of an variable called breadCrumbActiveItem.
 * The id is updated to the current ID in the url.
 */
export function updateBreadcrumbActive() {
  const id = getID("id");
  breadCrumbActiveItem.textContent = id;
}
