console.log("Events Script !!");

function getSpaceEventsFromApi() {
  console.log("getSpaceEventsFromApi ");

  var apiKey= 'I0E5i67UznchNDQxwPWdnGq0ONVG6sTXkV6F1SfP';
  var eventRequestUrl =
    `https://api.nasa.gov/neo/rest/v1/feed?&api_key=${apiKey}`;

  fetch(eventRequestUrl)
    .then(function (response) {
      if (response.ok) {
        console.log("respone is: ", response);
        return response.json();
      } else {
        console.log("respone is: NOT OK !!", response);
      }
    })
    .then(function (data) {
      console.log("data is : ", data);
    });
}

getSpaceEventsFromApi();
