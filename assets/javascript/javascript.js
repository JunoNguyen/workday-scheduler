var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};


// all calender save functions

function changeBackground1() {
    var element = document.querySelector("#calender1");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground2() {
    var element = document.querySelector("#calender2");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground3() {
    var element = document.querySelector("#calender3");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground4() {
    var element = document.querySelector("#calender4");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground5() {
    var element = document.querySelector("#calender5");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground6() {
    var element = document.querySelector("#calender6");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground7() {
    var element = document.querySelector("#calender7");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground8() {
    var element = document.querySelector("#calender8");
    element.style.backgroundColor = "var(--saved)";
};

function changeBackground9() {
    var element = document.querySelector("#calender9");
    element.style.backgroundColor = "var(--saved)";
};

// END save functions