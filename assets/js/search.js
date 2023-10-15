console.log("Dynamic search and local storage");


var searchTextEl = document.getElementById("search-text");
var searchView;

console.log("Search Output!!");

function getEventsFromSearch() {
  console.log("getEventsFromSearch ");

  

//var apiKey = '/search?q={q}';
//var eventRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=sun`;

if(searchView && searchView !== ""){
    console.log("searchView",searchView);
    var searchRequestUrl = `https://images-api.nasa.gov/search?media_type=image&q=${searchView}`;

}


//fetch(eventRequestUrl)
  //  .then(response => response.json())
    //.then(data => console.log(data))
    //.catch(error => console.error('Error:', error));

fetch(searchRequestUrl)
.then(function (respone) {
    if (respone.ok){
        return respone.json();
    } else {
        console.log("response is: NOT OKAY", respone);
    }

})
.then(function (data){
    console.log("Searched Images Data Is: ", data);
});

}

//christians 
//

function getSearchText() {
    console.log(searchTextEl,searchView)
    if(searchTextEl.value) {
        searchView = searchTextEl.value;
        getEventsFromSearch();
    }
}
getEventsFromSearch();