var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};

var saveBtn = document.querySelector("#saveBtn");

saveBtn.addEventListener('click', saveProgress())

function saveProgress() {

}