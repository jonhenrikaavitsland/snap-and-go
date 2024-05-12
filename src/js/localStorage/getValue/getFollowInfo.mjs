import { API_BASE, API_KEY, API_PROFILES } from "../../data/API/constants.mjs";
import { fetchData } from "../../data/API/fetch.mjs";
import { load } from "../load.mjs";

export async function getFollowersAndFollowing(name) {
  const information = await fetchData(`${API_BASE}${API_PROFILES}/${name}/?_following=true&_followers=true`, {
    headers: {
      Authorization: `Bearer ${load("token")}`,
      "X-Noroff-API-Key": API_KEY,
    },
  });
  console.log("this is information from the _following=true url: ", information.data.following);
  console.log("this is information from the _followers=true url: ", information.data.followers);
  console.log("this is information from the _followers=true url: ", information);

  const followers = information.data.followers;
  const following = information.data.following;
  return { followers, following };
}
