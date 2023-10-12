
   // fetch for pic of the day

var exampleURL = 'https://api.nasa.gov/planetary/apod?api_key=';

var apiKey ='fPmJ1tNwKaVRT5hG2jPsxrx3q4gF6OSRrzAtx0s8'; 

fetch(exampleURL + apiKey)
    .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("NETWORK RESPONSE ERROR");
        }
      })
      .then(data => {
        console.log(data);
         displayApod(data)
      })
      .catch(error => console.log('ERROR'));

      
function displayApod(data){
       var apodData = data;
       var apodImg = document.getElementById('apodImg');
       apodImg.src = apodData.hdurl;
       
       document.getElementById('displayImg').appendChild(apodImg);
       
}
   
      