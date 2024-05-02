
/**
 * Extracts the post ID from URL parameters
 * @returns {string|null} The post ID and null if not found.
 */

export function getID() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}