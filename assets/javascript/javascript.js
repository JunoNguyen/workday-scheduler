var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};

var saveButton = document.querySelector(".saveBtn");

saveButton.addEventListener('click', changeBackground);

 var tester = saveButton.previousElementSibling;

 function changeBackground() {
     tester.style.backgroundColor = "green";
 }

 