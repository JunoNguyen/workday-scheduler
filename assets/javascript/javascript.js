var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};

// var saveButton = document.querySelector(".saveBtn");

// saveButton.addEventListener('click', changeBackground);

//  var tester = saveButton.previousElementSibling;

//  function changeBackground() {
//      tester.style.backgroundColor = "green";
//  }

// var saveButton = document.querySelector(".saveBtn");
// var calenderBG = document.querySelector(".calender");

// var mode = "default";

// saveButton.addEventListener('click', function() {
//     if (mode === "default") {
//         mode = "saved";
//         calenderBG.setAttribute("class","saved");
//     } else {
//         mode = "default";
//         calenderBG.setAttribute("class", "default");
//     }
// });
 