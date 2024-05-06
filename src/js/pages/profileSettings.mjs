import { propertiesToVariables } from "../localStorage/getValue/propertiesToVariables.mjs";
import { personalProfileInfo } from "../ui/editProfile/profileInfo.mjs";

const { name, bio, imageSrc } = propertiesToVariables();

personalProfileInfo(name, bio, imageSrc);
