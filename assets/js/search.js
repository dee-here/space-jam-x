var searchTextEl = document.getElementById("search-text");
var searchResultGridEl = document.getElementById("search-result-container");
var pastSearchContainer = document.getElementById("past-search-container");

var searchView;

var pastSearches;

function getEventsFromSearch() {
  if (searchView && searchView !== ""){
    var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=${searchView}`;
    fetch(searchRequestUrl)
    .then(function (response) {
        if (resoponse.ok) {
            return response.json();
        } else {
            console.log("response is: NOT OKAY", response);
        }
    })
    .then(function (data) {
        createImagesFromResponse(data?.collection?.items);
        saveSearchToLocalStorage(searchView);
    });
    }
}

function createImagesFromResponse(items) {
    searchResultGridEl.innerHTML = "";

    if (items && items.length > 20){
        for (let i = 0; i < 20; i++){
            if (items[i]?.links?.[0]?.href) {
                let newGridDiv = document.createElement("div");
                newGridDiv.classList.add("grid-item");

                let newImg = document.createElement("img");
                newImg.src = items[i]?.link?.[0]?.href;
                newImg.alt = "NASA Image";

                newGridDiv.appendChild(newImg)
                searchResultGridEl.appendChild(newGridDiv);

            }
        }
    }
}

function getSearchText() {
    if (searchTextEl.value) {
        searchView = searchTextEl.value;
        getEventsFromSearch();
    }
}





