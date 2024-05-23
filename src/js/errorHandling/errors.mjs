export const ERROR_API = new Error("Oops! Something went wrong trying to fetch the API.");
export const ERROR_API_400 = new Error("Bad request, please ensure that your inputs are correct.");
export const ERROR_API_401 = new Error("Wrong email or password, please try again.");
export const ERROR_API_POSTS = new Error("Could not get posts from the API, please try again!");
export const ERROR_RENDER_VM_BTN = new Error("Could not display view more button, please try again or contact us if the problem persist.");
export const ERROR_CREATE_POST = new Error("Could not create post, please revise inputs and try again. Tip: only publicly accessible images are accepted!");