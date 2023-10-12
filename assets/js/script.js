console.log("Group - 9  Space Jam X");


// fetch for pic of the day
var exampleURL = 'https://api.nasa.gov/planetary/apod?api_key=';

	var apiKey ='fPmJ1tNwKaVRT5hG2jPsxrx3q4gF6OSRrzAtx0s8'; 
    
	fetch(exampleURL + apiKey)
      .then(data => data.json())
      .then(data => console.log(data))
    
    
    
    // var request = fetch(); 
	// request.open('GET', exampleURL + '?api_key=' + apiKey, true);

	// request.addEventListener('load',function(){

	// if(request.status >= 200 && request.status < 400){
    // var response = JSON.parse(request.responseText);
	// console.log(response);
	// } 
	// else {
	// console.log("Error in network request: " + request.statusText);
	// }});
	// request.send(null);
					




