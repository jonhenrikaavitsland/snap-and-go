import { renderCards } from "../../render/renderCards.mjs";

const searchForm = document.querySelector(".search-bar");
const tagToFilter = "snapgo";

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
