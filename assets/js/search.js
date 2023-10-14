
// christians
fetch("https://images-api.nasa.gov")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
//christians 