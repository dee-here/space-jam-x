console.log("Group - 9  Space Jam X");

fetch("https://images-api.nasa.gov")
.then(response => response.json())
.then(data => console.log(data));