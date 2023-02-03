function Remove() {
    var week = document.getElementById("week").value;
    switch (week) {
    case "Monday":
        document.getElementById("monday").innerText = ""
    case "Tuesday":
        document.getElementById("tuesday").innerText = ""
        break;
    case "Wednesday":
        document.getElementById("wednesday").innerText = ""
        break;
    case "Thursday":
        document.getElementById("thursday").innerText = ""
        break;
    case "Friday":
        document.getElementById("friday").innerText = ""
        break;
    case "Saturday":
        document.getElementById("saturday").innerText = ""
        break;
    case "Sunday":
        document.getElementById("sunday").innerText = ""
        break;
    }
}



// Save Function
window.onload = function() {
document.getElementById("monday").innerText = localStorage.getItem("Monday");
document.getElementById("tuesday").innerText = localStorage.getItem("Tuesday");
document.getElementById("wednesday").innerText = localStorage.getItem("Wednesday");
document.getElementById("thursday").innerText = localStorage.getItem("Thursday");
document.getElementById("friday").innerText = localStorage.getItem("Friday");
document.getElementById("saturday").innerText = localStorage.getItem("Saturday");
document.getElementById("sunday").innerText = localStorage.getItem("Sunday");
tasks();
};
function Save() {
var monday = document.getElementById("monday").innerText;
var tuesday = document.getElementById("tuesday").innerText;
var wednesday = document.getElementById("wednesday").innerText;
var thursday = document.getElementById("thursday").innerText;
var friday = document.getElementById("friday").innerText;
var saturday = document.getElementById("saturday").innerText;
var sunday = document.getElementById("sunday").innerText;

localStorage.setItem("Monday", monday);
localStorage.setItem("Tuesday", tuesday);
localStorage.setItem("Wednesday", wednesday);
localStorage.setItem("Thursday", thursday);
localStorage.setItem("Friday", friday);
localStorage.setItem("Saturday", saturday);
localStorage.setItem("Sunday", sunday);
tasks();
}
// The function to add workouts to your calender
function Add(){
    var input = document.getElementById("input").value;
    var week = document.getElementById("week").value;
    switch (week) {
    case "Monday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("monday").appendChild(checkbox);
        document.getElementById("monday").innerText = input + ", " + document.getElementById("monday").innerText;
        break;
    case "Tuesday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("tuesday").appendChild(checkbox);
        document.getElementById("tuesday").innerText = input + ", " + document.getElementById("tuesday").innerText;
        break;
    case "Wednesday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("wednesday").appendChild(checkbox);
        document.getElementById("wednesday").innerText = input + ", " + document.getElementById("wednesday").innerText;
        break;
    case "Thursday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("thursday").appendChild(checkbox);
        document.getElementById("thursday").innerText = input + ", " + document.getElementById("thursday").innerText;
        break;
    case "Friday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("friday").appendChild(checkbox);
        document.getElementById("friday").innerText = input + ", " + document.getElementById("friday").innerText;
        break;
    case "Saturday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("saturday").appendChild(checkbox);
        document.getElementById("saturday").innerText = input + ", " + document.getElementById("saturday").innerText;
        break;
    case "Sunday":
        var checkbox = document.createElement("check");
        checkbox.type = "checkbox";
        document.getElementById("sunday").appendChild(checkbox);
        document.getElementById("sunday").innerText = input + ", " + document.getElementById("sunday").innerText;
        break;
    }
    tasks();
}

//displays the day for the first part of daily tasks
function displayDayOfWeek() {
    var x = document.getElementById("saver").value;
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[d.getDay()];
    document.getElementById("days").innerHTML = "Today is " + day + " these are your tasks:";
}
setInterval(displayDayOfWeek, 1000);

// takes the day and then grabs
function tasks() {
    var x = document.getElementById("saver").value;
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = days[d.getDay()];
    switch (day) {
        case "Monday":
            document.getElementById("tasks").innerText = document.getElementById("monday").innerText;
            break;
        case "Tuesday":
            document.getElementById("tasks").innerText = document.getElementById("tuesday").innerText;
            break;
        case "Wednesday":
            document.getElementById("tasks").innerText = document.getElementById("wednesday").innerText;
            break;
        case "Thursday":
            document.getElementById("tasks").innerText = document.getElementById("thursday").innerText;
            break;
        case "Friday":
            document.getElementById("tasks").innerText = document.getElementById("friday").innerText;
            break;
        case "Saturday":
            document.getElementById("tasks").innerText = document.getElementById("saturday").innerText;
            break;
        case "Sunday":
            document.getElementById("tasks").innerText = document.getElementById("sunday").innerText;
            break;
    }
}