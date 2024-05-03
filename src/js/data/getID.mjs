
/**
 * Extracts the post ID from URL parameters
 * @returns {string|null} The post ID and null if not found.
 */

export function getID(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}