var myInterval = setInterval(currentDay(),100);

function currentDay() {
    var currentTime = moment();
    $("#currentDay").text(currentTime.format("dddd, MMMM Do"));
};

var calender1 = document.querySelector("#calender1");
var calender2 = document.querySelector("#calender2");
var calender3 = document.querySelector("#calender3");
var calender4 = document.querySelector("#calender4");
var calender5 = document.querySelector("#calender5");
var calender6 = document.querySelector("#calender6");
var calender7 = document.querySelector("#calender7");
var calender8 = document.querySelector("#calender8");
var calender9 = document.querySelector("#calender9");


// all calender save functions

function save1() {
    calender1.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender1", calender1.value);
};

function save2() {
    calender2.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender2", calender2.value);
};

function save3() {
    calender3.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender3", calender3.value);
};

function save4() {
    calender4.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender4", calender4.value);
};

function save5() {
    calender5.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender5", calender5.value);
};

function save6() {
    calender6.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender6", calender6.value);
};

function save7() {
    calender7.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender7", calender7.value);
};

function save8() {
    calender8.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender8", calender8.value);
};

function save9() {
    calender9.style.backgroundColor = "var(--saved)";
    localStorage.setItem("Calender9", calender9.value);
};
// END save functions

// make calender background color change when unfocused

function backgroundRed1() {
    if (calender1.value != localStorage.getItem("Calender1")) {
        calender1.style.backgroundColor = "var(--unsaved)";
    }
};

function backgroundRed2() {
    if (calender2.value != localStorage.getItem("Calender2")) {
        calender2.style.backgroundColor = "var(--unsaved)";
    }
};

function backgroundRed3() {
    if (calender3.value != localStorage.getItem("Calender3")) {
        calender3.style.backgroundColor = "var(--unsaved)";
    }
};

function backgroundRed4() {
    if (calender4.value != localStorage.getItem("Calender4")) {
        calender4.style.backgroundColor = "var(--unsaved)";
    }
};

function backgroundRed5() {
    if (calender5.value != localStorage.getItem("Calender5")) {
        calender5.style.backgroundColor = "var(--unsaved)";
    }
};

function backgroundRed6() {
    if (calender6.value != localStorage.getItem("Calender6")) {
        calender6.style.backgroundColor = "var(--unsaved)";
    } 
};

function backgroundRed7() {
    if (calender7.value != localStorage.getItem("Calender7")) {
        calender7.style.backgroundColor = "var(--unsaved)";
    } 
};

function backgroundRed8() {
    if (calender8.value != localStorage.getItem("Calender8")) {
        calender8.style.backgroundColor = "var(--unsaved)";
    } 
};

function backgroundRed9() {
    if (calender9.value != localStorage.getItem("Calender9")) {
        calender9.style.backgroundColor = "var(--unsaved)";
    } 
};




// END background red when unsaved

// maintain textarea text content when page refreshes

$(document).ready(function () {
    for (var i = 1; i < 9; i++) {
    $("#calender" + i).val(localStorage.getItem("Calender" + i))
    };
});




