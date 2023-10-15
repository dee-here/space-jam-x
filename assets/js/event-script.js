//handle to DOM elements
var asteroidContainerEl = document.getElementById("events-container");
var eventDatePickerEl = document.getElementById("event-date-picker");



//class to store asteroid info
class asteroid {
  constructor(name, approachDate, speed, minDiameter, maxDiameter) {
    this.name = name;
    this.approachDate = approachDate;
    this.speed = parseFloat(speed).toFixed(2);
    this.minDiameter = minDiameter.toFixed(2);
    this.maxDiameter = maxDiameter.toFixed(2);
  }
}

class neoApiObject {
  constructor(date, array ) {
    this.date = date;
    this.array = array;
  }
}


//store all asteroid data
// var asteroidDataArray = [new asteroid("asteroid-1", "10-20-2013", "33333 MPH", "0.23 M", "0,5 M")];
var asteroidDataArray;
var neoObjectArray;
var eventsDate;
var eventRequestUrl = `https://api.nasa.gov/neo/rest/v1/feed?&api_key=${apiKey}`;
var apiKey= 'I0E5i67UznchNDQxwPWdnGq0ONVG6sTXkV6F1SfP';

function getSpaceEventsFromApi() {

   if(eventsDate) {
    eventRequestUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${eventsDate}&api_key=${apiKey}`;
   }

  fetch(eventRequestUrl)
    .then(function (response) {
      if (response.ok) {
        // console.log("respone is: ", response);
        return response.json();
      } else {
        console.log("respone is: NOT OK !!", response);
      }
    })
    .then(function (data) {
      // console.log("data is : ", data);
      //call getAsteroid data here !!
      getAsteroidData(data);
      displayAsteroids();

    });
}

function displayAsteroids() {
  asteroidContainerEl.innerHTML = '';
  //asteroidDataArray= [...asteroidDataArray, ...asteroidDataArray];
  if(asteroidDataArray.length > 0)  {
    asteroidDataArray.forEach(data => {
      let newDiv = document.createElement('div');
      newDiv.classList.add("asteroid-data");

      let newHeadingName = document.createElement('h3');
      newHeadingName.textContent = `Name: ${data.name}`;
      newDiv.appendChild(newHeadingName);

      let newHeadingDate = document.createElement('h3');
      newHeadingDate.textContent = `Approach date: ${data.approachDate}`;
      newDiv.appendChild(newHeadingDate);

      let newHeadingSpeed = document.createElement('h3');
      newHeadingSpeed.textContent = `Speed: ${data.speed}`;
      newDiv.appendChild(newHeadingSpeed);

      let newHeadingMinDiameter = document.createElement('h3');
      newHeadingMinDiameter.textContent = `Minimum Diameter: ${data.minDiameter}`;
      newDiv.appendChild(newHeadingMinDiameter);

      let newHeadingMaxDiameter = document.createElement('h3');
      newHeadingMaxDiameter.textContent = `Max Diameter: ${data.maxDiameter}`;
      newDiv.appendChild(newHeadingMaxDiameter);

      asteroidContainerEl.appendChild(newDiv);

    });
  }
}

function getAsteroidData(data) {
  //use data from fetch to load this.
  //clear stale data
  asteroidDataArray = [];
  var neos = data?.near_earth_objects;
  if(neos) {
    neos = [neos];
    neoObjectArray =[];
    // var itemArray;
    neos.forEach( neo => {
      for(let key in neo) {
        let value = neo[key];
        neoObjectArray.push(new neoApiObject(key, value));
        }
    });
    neoObjectArray.sort((a,b) => new Date(a.date) - new Date(b.date));

    if(neoObjectArray.length > 0 && neoObjectArray[0]) {
      // console.log(neoObjectArray[0]?.array);

      //picking the 6 next asteroids nearing earth
      for (let i = 0; neoObjectArray[0]?.array?.length; i++) {
        if (neoObjectArray[0].array[i]) {
          let itemData = neoObjectArray[0].array[i];
          //var asteroidDataArray = [new asteroid("asteroid-1", "10-20-2013", "33333 MPH", "0.23 M", "0,5 M")];
          asteroidDataArray.push(
            new asteroid(
              itemData.name,
              itemData?.close_approach_data?.[0]?.close_approach_date,
              itemData?.close_approach_data?.[0]?.relative_velocity.miles_per_hour,
              itemData?.estimated_diameter?.miles?.estimated_diameter_min,
              itemData?.estimated_diameter?.miles?.estimated_diameter_max
            )
          );
        } else {
          return;
        }
      }


    }

  }



}

function setDateForEventsApi() {

}


function getSpaceEvents() {
  // console.log(" events clicked with: ", event);
  console.log("Search space events clicked @@", eventDatePickerEl.value);
  if(eventDatePickerEl?.value ) {
    eventsDate = eventDatePickerEl.value;
    //call fetch api 
    getSpaceEventsFromApi();
  }
}

function displayDatePicker() {
  flatpickr("#event-date-picker", {
    defaultDate: 'today',
    // dateFormat: 'Y-M-D',
  });
}

// function initMaterialize() {
//   M.AutoInit();
// };

function init() {
  // initMaterialize()
  getSpaceEventsFromApi();
  //getAsteroidData();
  //should be called in getasteroiddata!!
  //displayAsteroids();
  displayDatePicker()
}


init();