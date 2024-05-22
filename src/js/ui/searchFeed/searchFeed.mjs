import { renderCards } from "../../render/renderCards.mjs";

const searchForm = document.querySelector(".search-bar");
const tagToFilter = "snapgo";

/**
 * Searches through the posts in the feed and looks for words matching search term. It renders the results or a text message if no posts was found.
 * @param {Array} posts 
 * @param {variable} parent 
 * @param {variable} btnParent 
 */
export function searchFeed(posts, parent, btnParent) {
  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    let searchInput = document.querySelector(".search-bar input").value.trim();
    const filteredPosts = posts.filter(post => post.tags.includes(tagToFilter) && post.title.includes(searchInput));
    parent.innerHTML = "";
    renderCards(filteredPosts, parent);
    btnParent.innerHTML = "";

    if (filteredPosts.length === 0) {
      parent.textContent = "No posts matched the search, please try again.";
      btnParent.innerHTML = "";
    }
  });
}
