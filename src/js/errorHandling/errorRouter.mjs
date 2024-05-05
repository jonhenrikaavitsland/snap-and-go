import { ERROR_API, ERROR_API_400, ERROR_API_401 } from "./errors.mjs";

export function errorRouter(error) {
  switch (error) {
    case 400:
      return ERROR_API_400;
    case 401:
      return ERROR_API_401;
    default:
      return ERROR_API;
  }
}
