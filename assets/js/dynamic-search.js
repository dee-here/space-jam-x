console.log("Dynamic search and local storage");

var searchTextEl = document.getElementById("search-text");
var searchResultGridEl = document.getElementById("search-result-container");
var searchView;

console.log("Search Output!!");

function getEventsFromSearch() {
  console.log("getEventsFromSearch ");
  // var apiKey = '/search?q={q}';
  //var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=sun`;

  if (searchView && searchView !== "") {
    console.log("searchView", searchView);
    var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=${searchView}`;
    // fetch(eventRequestUrl)
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.log('Error:', error));
    fetch(searchRequestUrl)
      .then(function (response) {
        if (response.ok) {
          // console.log("respone is: ", response);
          return response.json();
        } else {
          console.log("respone is: NOT OK !!", response);
        }
      })
      .then(function (data) {
        console.log(
          "Searched Images data is : ",
          data,
          data?.collection?.items
        );
        console.log();
        createImagesFromResponse(data?.collection?.items);
        //call getAsteroid data here !!
        //   getAsteroidData(data);
        //   displayAsteroids();
      });
  }
}
//christians 
//

function createImagesFromResponse(items) {
    console.log("createImagesFromResponse ", items);
    //clear contents of result.
    searchResultGridEl.innerHTML = '';
    //display 30 results...
    if(items && items.length > 20) {
        for(let i=0; i<20; i++) {
            console.log("items : ", items[i]?.links?.[0].href);
            if(items[i]?.links?.[0]?.href) {

                let newGridDiv = document.createElement('div');
                newGridDiv.classList.add("grid-item");

                let newImg = document.createElement('img');
                newImg.src = items[i]?.links?.[0]?.href;
                newImg.alt = 'NASA image';

                newGridDiv.appendChild(newImg);
                searchResultGridEl.appendChild(newGridDiv);
            }
        }
    }

}

function getSearchText() {
    console.log(searchTextEl,searchView)
    if(searchTextEl.value) {
        searchView = searchTextEl.value;
        getEventsFromSearch();
    }
}

getEventsFromSearch();
