
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
    // picture of the day image
       var apodData = data;
       var apodImg = document.getElementById('apodImg');
       apodImg.src = apodData.hdurl;
       document.getElementById('displayImg').appendChild(apodImg);
    // picture of the day image   
    // discription for picture of the day   
       var apodDate = document.getElementById('apodDisc')
       apodDate.innerText = apodData.explanation
       document.getElementById('displayDisc').appendChild(apodDate)
    // discription for picture of the day
    // added title for picture of the day 
       var apodTitle =document.getElementById('apodTitle')
       apodTitle.innerText = apodData.title
       document.getElementById('displayImg').appendChild(apodTitle)
    // added title for picture of the day


    
}
   
      