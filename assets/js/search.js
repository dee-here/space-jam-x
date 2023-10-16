console.log("Dynamic search and local storage");


var searchTextEl = document.getElementById("search-text");
var searchView;

function getEventsFromSearch() {
  console.log("getEventsFromSearch ");

  var apiKey = "/search?q={q}";
  var eventRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=sun`;

  if (searchView !== "") {
    eventRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=${searchView}`;
  }

  fetch(eventRequestUrl)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
}

function getSearchText() {
  console.log(searchTextEl, searchView);
  if (searchTextEl.value) {
    searchView = searchTextEl.value;
    getEventsFromSearch();
  }
}
// getEventsFromSearch();
