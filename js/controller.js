const btnSubmit = document.getElementById('btnSubmit');
const modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];

btnSubmit.addEventListener('click', function(event) {
    console.log('Submit Clicked!')
    modal.style.display = "block";
});

span.addEventListener('click', function(event) {
    console.log('Submit Clicked!')
    modal.style.display = "none";
});