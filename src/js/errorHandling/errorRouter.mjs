import { ERROR_API, ERROR_API_400 } from "./errors.mjs";

export function errorRouter(error) {
  switch (error) {
    case 400:
      return ERROR_API_400;
    default:
      return ERROR_API;
  }
}
