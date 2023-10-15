console.log("Search Output!!");

function getEventsFromSearch() {
  console.log("getEventsFromSearch ");

var apiKey = '/search?q={q}';
var eventRequestUrl = `https://images-api.nasa.gov${apiKey}`;


fetch(eventRequestUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}
//christians 
getEventsFromSearch