import { personalProfileInfo } from "../ui/profileInfo.mjs";
import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";

const { name, bio, imageSrc } = propertiesToVariables();

personalProfileInfo(name, bio, imageSrc);
