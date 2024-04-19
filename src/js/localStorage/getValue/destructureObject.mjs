import { getObject } from "./getObject.mjs";

export function propertiesToVariables() {
  const object = getObject();
  const name = object.name;
  const bio = object.bio;
  const imageSrc = object.avatar.url;
  return { name, bio, imageSrc };
}
