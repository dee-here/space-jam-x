console.log("Group - 9  Space Jam X");


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
        displayApod()
      })
      .catch(error => console.log('ERROR'));
    
    
   function displayApod(data){
      


   }

   




