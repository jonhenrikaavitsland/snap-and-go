import { getCountsProfile } from "../../../localStorage/getValue/getCount.mjs";
import { editingProfileCounts } from "./profileCounts.mjs";

export function displayCounts(user) {
  const { followers, posts, following } = getCountsProfile(user);
  editingProfileCounts(followers, posts, following);
}
