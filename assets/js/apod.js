
   // fetch for pic of the day
var apodDatePickerEl = document.getElementById('apod-date-picker')
var apiKey ='fPmJ1tNwKaVRT5hG2jPsxrx3q4gF6OSRrzAtx0s8'; 
var exampleURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
var apodDate;

// var apodUrl = `https://api.nasa.gov/planetary/apod?date=${eventsDate}&api_key=${apiKey}`;
function getApodData(){
console.log('hello','apodDate');

  if(apodDate) {
    exampleURL  = `https://api.nasa.gov/planetary/apod?date=${apodDate}&api_key=${apiKey}`;
   }

  fetch(exampleURL)

    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then(data => {
        console.log(data);
         displayApod(data);
      })
      .catch(error => console.log('ERROR'));
}
      
function displayApod(data){
    // picture of the day image
       var apodData = data;
       var apodImg = document.getElementById('apodImg');
       apodImg.src = apodData.hdurl;
       document.getElementById('displayImg').appendChild(apodImg);
    // picture of the day image   
     // added title for picture of the day 
       var apodTitle =document.getElementById('apodTitle')
       apodTitle.innerText = 'Title: '+ apodData.title
       document.getElementById('displayDisc').appendChild(apodTitle)
    // added title for picture of the day
    // added Date for picture of the day
      var apodDate = document.getElementById('apodDate');
      apodDate.innerText ='date: ' + apodData.date
      document.getElementById('displayDisc').appendChild(apodDate)
   // added Date for picture of the day
   // added Discription for picture of the day 
       var apodDisc = document.getElementById('apodDisc')
       apodDisc.innerText = apodData.explanation
       document.getElementById('displayDisc').appendChild(apodDisc)
   // added Discription for picture of the day
}

function displayDatePicker() {
  flatpickr("#apod-date-picker", {
    defaultDate: 'today',
    maxDate: 'today'
    // dateFormat: 'Y-M-D',
  });
}

// this changes the date of Apod
function getApodDate() {
  console.log(" events clicked with: ");
  console.log("Search space events clicked @@", eventDatePickerEl.value);
  if(apodDatePickerEl?.value ) {
    apodDate = apodDatePickerEl.value;
    //call fetch api 
    getApodData();
  }
}

//  execution fetch
getApodData(); 
displayDatePicker();   