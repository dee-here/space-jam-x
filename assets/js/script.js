console.log("Group - 9  Space Jam X");

// christians
fetch("https://images-api.nasa.gov")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
//christians 


//document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.sidenav');
//     var instances = M.Sidenav.init(elems, options);
//   });

$(document).ready(function () {
    $('.datepicker').datepicker();
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
});

{/* <script>
        $(document).ready(function(){
$('.sidenav').sidenav();
})
    </script>
*/}




console.log("Group - 9  Space Jam X");
