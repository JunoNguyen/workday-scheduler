var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};


// all calender save functions

function changeBackground1() {
    var element = document.querySelector("#calender1");
    element.style.backgroundColor = "var(--saved)";

    var calenderOneTxt = document.querySelector("#calender1").value;
    localStorage.setItem("Calender1", calenderOneTxt);
    alert("Calender1 Saved!");
    console.log("Calender1 Saved!");
};

function changeBackground2() {
    var element = document.querySelector("#calender2");
    element.style.backgroundColor = "var(--saved)";

    var calenderTwoTxt = document.querySelector("#calender2").value;
    localStorage.setItem("Calender2", calenderTwoTxt);
    alert("Calender2 Saved!");
    console.log("Calender2 Saved!");
};

function changeBackground3() {
    var element = document.querySelector("#calender3");
    element.style.backgroundColor = "var(--saved)";

    var calenderThreeTxt = document.querySelector("#calender3").value;
    localStorage.setItem("Calender3", calenderThreeTxt);
    alert("Calender3 Saved!");
    console.log("Calender3 Saved!");
};

function changeBackground4() {
    var element = document.querySelector("#calender4");
    element.style.backgroundColor = "var(--saved)";

    var calenderFourTxt = document.querySelector("#calender4").value;
    localStorage.setItem("Calender4", calenderFourTxt);
    alert("Calender4 Saved!");
    console.log("Calender4 Saved!");
};

function changeBackground5() {
    var element = document.querySelector("#calender5");
    element.style.backgroundColor = "var(--saved)";

    var calenderFiveTxt = document.querySelector("#calender5").value;
    localStorage.setItem("Calender5", calenderFiveTxt);
    alert("Calender5 Saved!");
    console.log("Calender5 Saved!");
};

function changeBackground6() {
    var element = document.querySelector("#calender6");
    element.style.backgroundColor = "var(--saved)";

    var calenderSixTxt = document.querySelector("#calender6").value;
    localStorage.setItem("Calender6", calenderSixTxt);
    alert("Calender6 Saved!");
    console.log("Calender6 Saved!");
};

function changeBackground7() {
    var element = document.querySelector("#calender7");
    element.style.backgroundColor = "var(--saved)";

    var calenderSevenTxt = document.querySelector("#calender7").value;
    localStorage.setItem("Calender7", calenderSevenTxt);
    alert("Calender7 Saved!");
    console.log("Calender7 Saved!");
};

function changeBackground8() {
    var element = document.querySelector("#calender8");
    element.style.backgroundColor = "var(--saved)";

    var calenderEightTxt = document.querySelector("#calender8").value;
    localStorage.setItem("Calender8", calenderEightTxt);
    alert("Calender8 Saved!");
    console.log("Calender8 Saved!");
};

function changeBackground9() {
    var element = document.querySelector("#calender9");
    element.style.backgroundColor = "var(--saved)";

    var calenderNineTxt = document.querySelector("#calender9").value;
    localStorage.setItem("Calender9", calenderNineTxt);
    alert("Calender9 Saved!");
    console.log("Calender9 Saved!");
};
// END save functions
