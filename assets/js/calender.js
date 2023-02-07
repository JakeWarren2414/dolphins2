const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const data = fetch("https://jakewarren2414.github.io/dolphins2/assets/json/userdata.json")

// Taking the data from the json and putting it into the table for each day

document.getElementById("monday").innerHTML = data.Users[0].monday;
document.getElementById("tuesday").innerHTML = data.Users[0].tuesday;
document.getElementById("wednesday").innerHTML = data.Users[0].wednesday;
document.getElementById("thursday").innerHTML = data.Users[0].thursday;
document.getElementById("friday").innerHTML = data.Users[0].friday;
document.getElementById("saturday").innerHTML = data.Users[0].saturday;
document.getElementById("sunday").innerHTML = data.Users[0].sunday;

function Remove() {
    var week = document.getElementById("week").value;
    document.getElementById(week.toLowerCase()).innerText = "";
  }
// When the screen reloads this function happens that cycles through each day and uses the local storage for it
window.onload = function() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    document.getElementById(elementId).innerText = localStorage.getItem(day);
  });
  tasks();
};
// Goes through each day and saves it
function Save() {
  days.forEach(day => {
    const elementId = day.toLowerCase();
    localStorage.setItem(day, document.getElementById(elementId).innerText);
  });
  tasks();
  location.href="#workout-calender";
}
// The function to add workouts to your calender
function Add() {
  const input = document.getElementById("input").value;
  const week = document.getElementById("week").value;
  const dayId = week.toLowerCase();
  const newDiv = document.createElement("div");
  newDiv.innerText = input;
  document.getElementById(dayId).appendChild(newDiv);
}

  

//displays the day for the first part of daily tasks
function displayDayOfWeek() {
    var x = document.getElementById("saver").value;
    var d = new Date();
    var day = days[d.getDay()];
    document.getElementById("days").innerHTML = "Today is " + day + " these are your tasks:";
}
setInterval(displayDayOfWeek, 1000);

// takes the day and then grabs
function tasks() {
  var currentDay = new Date().getDay();
  var day = days[currentDay];

  var tasksDiv = document.createElement("div");
  tasksDiv.classList.add("row2");
  tasksDiv.innerText = document.getElementById(day.toLowerCase()).innerText;

  document.getElementById("tasks").appendChild(tasksDiv);

}
