console.log("Dynamic search and local storage");

var searchTextEl = document.getElementById("search-text");
var searchResultGridEl = document.getElementById("search-result-container");
var pastSearchContainerEl = document.getElementById("past-search-container");

var searchView;

//localstorage
var pastSearches;

console.log("Search Output!!");

function getEventsFromSearch() {
  console.log("getEventsFromSearch ");
  // var apiKey = '/search?q={q}';
  //var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=sun`;

  if (searchView && searchView !== "") {
    console.log("searchView", searchView);
    var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=${searchView}`;
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
        createImagesFromResponse(data?.collection?.items);
        saveSearchToLocalStorage(searchView);
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

function pastSearchLinkClicked() {
  searchTextEl.value = this?.textContent;
  getSearchText();
}

function displayPastSearches() {
  pastSearches = JSON.parse(localStorage.getItem('pastSearches')) || [];
  pastSearchContainerEl.innerHTML = '';

  pastSearches.forEach( item => {
    let newButton = document.createElement('button');
    newButton.classList.add("btn");
    newButton.classList.add("btn-flat");
    // newButton.classList.add("waves-effect");
    // newButton.classList.add("waves-dark");
    newButton.textContent = item;
    newButton.addEventListener('click', pastSearchLinkClicked);

    pastSearchContainerEl.appendChild(newButton);

  });

}

function saveSearchToLocalStorage(text) {
  text = text?.trim();
  if(text != undefined && text.trim() !== "") {
    pastSearches = JSON.parse(localStorage.getItem('pastSearches')) || [];
    console.log('pastSearches from localstorage ', pastSearches);
    if(!pastSearches.includes(text)) {
      // Only save last 8 searches
      if(pastSearches.length >= 8) {
        pastSearches.shift();
      }
      pastSearches.push(text);
      console.log('SAving to localstorage ', pastSearches);
      localStorage.setItem('pastSearches', JSON.stringify(pastSearches));
    }
    displayPastSearches();

  }
    

}



function init() {
  displayPastSearches();
  getEventsFromSearch();
}

//starts here
init();